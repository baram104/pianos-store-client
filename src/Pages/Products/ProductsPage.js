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
import useFetch from "../../hooks/useFetch";
import OutOfStockButtons from "../../Components/OutOfStockButtons/OutOfStockButtons";
import { useContext } from "react";
import UserContext from "../../store/user-context";

export default function ProductsPage() {
  const params = useParams();
  const nav = useNavigate();
  const ctx = useContext(UserContext);

  let {
    loading: loadingPianos,
    data: pianos,
    error: pianosError,
  } = useFetch(api.getPianos, params.category_id, params.category_id);

  const {
    loading: loadingCategories,
    data: categories,
    error: categoriesError,
  } = useFetch(api.getCategories);

  const {
    loading: loadingSortedPianos,
    data: sortedPianos,
    error: sortedPianosError,
  } = useFetch(api.getPianosBySort, params.sortCondition, params.sortCondition);

  const onChangeFilterHandler = ({ target: { value } }) => {
    if (value === "default") {
      nav("/");
    }
    nav(`/products/sort/${value}`);
  };

  if (!loadingSortedPianos && params.sortCondition) {
    pianos = sortedPianos;
  }

  return (
    <Container fluid className="align-items-baseline">
      <Row className="my-0">
        {!loadingCategories ? (
          <Col md={3} className={`${styles.categoryBg} border-end`}>
            <ListGroup variant="flush">
              {categories.map((category) => (
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
          {!loadingPianos ? (
            <Row
              className={`justify-content-between flex-start justify-content-xs-center`}
            >
              {pianos.map((piano) => (
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
                          {!ctx.userFavProducts.find(
                            (product) => product.id === piano.id
                          ) ? (
                            <img
                              onClick={() => ctx.addToWishList(piano.id)}
                              className={styles.wishlistIcon}
                              src={emptyHeart}
                            ></img>
                          ) : (
                            <img
                              onClick={() => ctx.removeFromWishList(piano.id)}
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
                        {(piano.units_in_stock && piano.unitsInStock) !== 0 ? (
                          <>
                            <Link to={`/checkout/${piano.id}`}>
                              <Button variant="primary" className="m-1">
                                But it Now
                              </Button>
                            </Link>

                            {!ctx.userCart.find(
                              (product) => product.id === piano.id
                            ) ? (
                              <Button
                                onClick={() => ctx.addToCart(piano.id)}
                                variant="secondary"
                              >
                                Add to Cart
                              </Button>
                            ) : (
                              <Button
                                onClick={() => ctx.removeFromCart(piano.id)}
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
