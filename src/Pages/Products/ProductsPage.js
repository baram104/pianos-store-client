import Rating from "@mui/material/Rating";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  ListGroup,
  Form,
  Spinner,
} from "react-bootstrap";
import * as api from "../../DAL/api";
import styles from "./ProductsPage.module.css";
import filledHeart from "../../assets/filledheart.png";
import emptyHeart from "../../assets/emptyheart.png";
import { Link, useNavigate, useParams } from "react-router-dom";
import OutOfStockButtons from "../../Components/OutOfStockButtons/OutOfStockButtons";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  addItemToCart,
  addToWishList,
  removeFromCart,
  removeFromWishList,
} from "../../store/redux-store";
import { useEffect, useState } from "react";

export default function ProductsPage() {
  const [categories, setCategories] = useState({ data: [], loading: true });
  const [pianos, setPianos] = useState({ data: [], loading: true });
  const params = useParams();
  const nav = useNavigate();
  const cartState = useSelector((state) => state.cart);
  const wishListState = useSelector((state) => state.wishList);
  const userDetails = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const authCheck = () => {
    if (!userDetails.isLoggedIn) {
      nav("/login");
      return;
    }
    return true;
  };

  useEffect(() => {
    api.getCategories().then((data) => setCategories({ data, loading: false }));
  }, []);

  useEffect(() => {
    if (params.sortCondition) {
      api
        .getPianosBySort(params.sortCondition)
        .then((data) => setPianos({ data, loading: false }));
    } else {
      api
        .getPianos(params.category_id)
        .then((data) => setPianos({ data, loading: false }));
    }
  }, [params.sortCondition, params.category_id]);

  const onChangeFilterHandler = ({ target: { value } }) => {
    if (value === "default") {
      nav("/");
    }
    nav(`/products/sort/${value}`);
  };

  return (
    <Container fluid className="align-items-baseline">
      <Row className="my-0">
        {!categories.loading ? (
          <Col md={3} className={`${styles.categoryBg} border-end`}>
            <ListGroup variant="flush">
              {categories.data.map((category) => (
                <Link
                  key={category.id}
                  to={"category/" + category.id}
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <ListGroup.Item
                    action
                    className={`${styles.listItem} bg-transparent`}
                  >
                    {category.name}
                  </ListGroup.Item>
                </Link>
              ))}
            </ListGroup>
          </Col>
        ) : (
          ""
        )}

        <Col md={9} className="py-4 px-5">
          <Row className="mt-0">
            <Col xs={3} className="mt-0">
              <Form.Select
                onChange={onChangeFilterHandler}
                aria-label="Default select example"
              >
                <option value="default">Default</option>
                <option value="low-to-high">Price low to high</option>
                <option value="high-to-low">Price high to low</option>
                <option value="popular">Most Popular</option>
                <option value="rated">Most Rated</option>
              </Form.Select>
            </Col>
          </Row>
          {!pianos.loading ? (
            <Row
              className={`justify-content-between flex-start justify-content-xs-center`}
            >
              {pianos.data.map((piano) => (
                <Card
                  key={piano.id}
                  style={{ width: "20rem", height: "37rem" }}
                  className="mb-3 px-0"
                >
                  <Card.Img
                    variant="top"
                    src={`http://localhost:3100/images/pianos/${piano.id}/${piano.img}`}
                    title={piano.img}
                    className={styles.cardImg}
                  />
                  <Card.Body className="d-flex flex-column justify-content-between">
                    <div>
                      <Card.Title>
                        <Link
                          to={`${piano.id}`}
                          style={{ textDecoration: "none" }}
                        >
                          {piano.name}
                        </Link>
                        <span className={styles.wishlistIconContainer}>
                          {!wishListState.wishList.find(
                            (product) => product.id === piano.id
                          ) ? (
                            <img
                              onClick={() => {
                                if (!authCheck()) {
                                  return;
                                }
                                dispatch(addToWishList(piano.id));
                              }}
                              className={styles.wishlistIcon}
                              src={emptyHeart}
                            ></img>
                          ) : (
                            <img
                              onClick={() => {
                                if (!authCheck()) {
                                  return;
                                }
                                dispatch(removeFromWishList(piano.id));
                              }}
                              className={styles.wishlistIcon}
                              src={filledHeart}
                            ></img>
                          )}
                        </span>
                      </Card.Title>
                      <Card.Text className="text-primary">
                        ${piano.unitPrice || piano.unit_price}
                      </Card.Text>
                      <Card.Text>{piano.description.slice(0, 50)}...</Card.Text>
                      <Rating
                        name="read-only"
                        value={piano.avgRating || piano.avg_rating}
                        readOnly
                      />
                    </div>
                    <div className="mt-2">
                      <div className="text-center">
                        {piano.units_in_stock !== 0 ? (
                          <>
                            <Link to={`/checkout/${piano.id}`}>
                              <Button variant="primary" className="m-1">
                                But it Now
                              </Button>
                            </Link>

                            {!cartState.cart.find(
                              (product) => product.id === piano.id
                            ) ? (
                              <Button
                                onClick={() => {
                                  {
                                    if (!authCheck()) {
                                      return;
                                    }
                                    dispatch(addItemToCart(piano.id));
                                  }
                                }}
                                variant="secondary"
                              >
                                Add to Cart
                              </Button>
                            ) : (
                              <Button
                                onClick={() => {
                                  if (!authCheck()) {
                                    return;
                                  }
                                  dispatch(removeFromCart(piano.id));
                                }}
                                variant="danger"
                              >
                                Remove from Cart
                              </Button>
                            )}
                          </>
                        ) : (
                          <OutOfStockButtons></OutOfStockButtons>
                        )}
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              ))}
            </Row>
          ) : (
            <Spinner animation="border" variant="primary" />
          )}
        </Col>
      </Row>
    </Container>
  );
}
