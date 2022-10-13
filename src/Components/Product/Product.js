import { Button, Card, Col, Form, Row } from "react-bootstrap";
import styles from "./Product.module.css";
import { MdDelete } from "react-icons/md";
import * as api from "../../DAL/api";
import Spinner from "react-bootstrap/Spinner";
import OutOfStockButtons from "../OutOfStockButtons/OutOfStockButtons";
import { Link } from "react-router-dom";
import { Rating } from "@mui/material";
import useFetch from "../../hooks/useFetch";
import filledHeart from "../../assets/filledheart.png";
import { useContext, useEffect } from "react";
import UserContext from "../../store/user-context";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  removeFromWishList,
  updateCartProd,
} from "../../store/redux-store";
export default function Product({
  isCart,
  id,
  isRating,
  isOnWishList,
  quantity,
}) {
  // const {
  //   removeFromWishList,
  //   userFavProducts,
  //   updateCartProd,
  //   removeFromCart,
  // } = useContext(UserContext);

  const dispatch = useDispatch();

  const {
    loading: pianoLoading,
    data: piano,
    error: pianoError,
  } = useFetch(api.getPiano, id);

  return (
    <Row className={`justify-content-center mt-5 ${styles.cardSize}`}>
      {!pianoLoading ? (
        <Card as={Col} className={`d-flex flex-row px-0`}>
          <Card.Img
            className={styles.img}
            variant="top"
            src={`http://localhost:3100/images/pianos/${piano.id}/${piano.imgs[0]}`}
          />
          <Card.Body>
            <Card.Title>
              <Link
                to={`/products/${piano.id}`}
                style={{ textDecoration: "none" }}
              >
                {piano.name}
              </Link>
            </Card.Title>
            <Card.Text className="text-primary">${piano.unit_price}</Card.Text>
            <Card.Text>{piano.description.slice(0, 50)}...</Card.Text>
            {isRating ? (
              <Rating name="simple-controlled" />
            ) : (
              <Row className="justify-content-between">
                {isCart && piano.units_in_stock !== 0 ? (
                  <Col md={8} xs={8}>
                    <Form.Group>
                      <Form.Control
                        onChange={(e) =>
                          dispatch(updateCartProd(piano.id, e.target.value))
                        }
                        type="number"
                        placeholder="Qty."
                        min={1}
                        value={quantity}
                        max={piano.units_in_stock}
                        className="mb-3"
                      />
                    </Form.Group>
                  </Col>
                ) : (
                  ""
                )}
                {isOnWishList && (
                  <span className={styles.wishlistIconContainer}>
                    <img
                      onClick={() => dispatch(removeFromWishList(id))}
                      className={styles.wishlistIcon}
                      src={filledHeart}
                    ></img>
                  </span>
                )}
                {!piano.units_in_stock && (
                  <div className="mb-3">
                    <OutOfStockButtons isOnWishList={isOnWishList} />
                  </div>
                )}
                {isCart ? (
                  <Col md={5}>
                    <Button
                      onClick={() => dispatch(removeFromCart(id))}
                      variant="secondary"
                    >
                      Delete
                      <MdDelete />
                    </Button>
                  </Col>
                ) : (
                  <div>{quantity}</div>
                )}
              </Row>
            )}
          </Card.Body>
        </Card>
      ) : (
        <Spinner animation="border" variant="primary" />
      )}
    </Row>
  );
}
