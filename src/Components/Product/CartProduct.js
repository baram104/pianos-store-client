import { Button, Card, Col, Form, Row } from "react-bootstrap";
import styles from "./CartProduct.module.css";
import { MdDelete } from "react-icons/md";
import * as api from "../../DAL/api";
import Spinner from "react-bootstrap/Spinner";
import OutOfStockButtons from "../OutOfStockButtons/OutOfStockButtons";
import { useEffect, useState } from "react";

export default function CartProduct({ isCart, id }) {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    api.getPiano(id).then((data) => setProduct(data));
  }, []);

  return (
    <Row className={`justify-content-center mt-5 ${styles.cardSize}`}>
      {product ? (
        <Card as={Col} className={`d-flex flex-row`}>
          <Card.Img variant="top" src={product.imgs[0].imgSrc} />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text className="text-primary">${product.unitPrice}</Card.Text>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Row className="justify-content-between">
              {product.unitsInStock ? (
                <Col md={8} xs={8}>
                  <Form.Group>
                    <Form.Control
                      type="number"
                      placeholder="Qty."
                      min={1}
                      max={product.unitsInStocks}
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
          </Card.Body>
        </Card>
      ) : (
        <Spinner animation="border" variant="primary" />
      )}
    </Row>
  );
}
