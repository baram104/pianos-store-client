import { Button, Card, Col, Form, Row } from "react-bootstrap";
import styles from "./CartProduct.module.css";
import { MdDelete } from "react-icons/md";
import * as api from "../../DAL/api";
import Spinner from "react-bootstrap/Spinner";
import OutOfStockButtons from "../OutOfStockButtons/OutOfStockButtons";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Rating } from "@mui/material";

export default function CartProduct({ isCart, id, isRating }) {
  const [product, setProduct] = useState(null);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    api.getPiano(id).then((data) => setProduct(data));
  }, []);

  return (
    <Row className={`justify-content-center mt-5 ${styles.cardSize}`}>
      {product ? (
        <Card as={Col} className={`d-flex flex-row`}>
          <Card.Img
            variant="top"
            src={`http://localhost:3100/images/pianos/${product.id}/${product.imgs[0]}`}
            style={{ width: "40vh" }}
          />
          <Card.Body>
            <Card.Title>
              <Link
                to={`/products/${product.id}`}
                style={{ textDecoration: "none" }}
              >
                {product.name}
              </Link>
            </Card.Title>
            <Card.Text className="text-primary">
              ${product.unit_price}
            </Card.Text>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            {!isRating ? (
              <Row className="justify-content-between">
                {product.units_in_stock ? (
                  <Col md={8} xs={8}>
                    <Form.Group>
                      <Form.Control
                        type="number"
                        placeholder="Qty."
                        min={1}
                        max={product.units_in_stock}
                        className="mb-3"
                      />
                    </Form.Group>
                  </Col>
                ) : (
                  <div className="mb-3">
                    <OutOfStockButtons />
                  </div>
                )}
                {isCart && (
                  <Col md={5}>
                    <Button variant="secondary">
                      Delete
                      <MdDelete />
                    </Button>
                  </Col>
                )}
              </Row>
            ) : (
              <Rating
                name="simple-controlled"
                value={rating}
                onChange={(event, newValue) => {
                  setRating(newValue);
                }}
              />
            )}
          </Card.Body>
        </Card>
      ) : (
        <Spinner animation="border" variant="primary" />
      )}
    </Row>
  );
}
