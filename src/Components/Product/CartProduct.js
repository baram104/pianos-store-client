import { Button, Card, Col, Form, Row } from "react-bootstrap";
import styles from "./CartProduct.module.css";
import { MdDelete } from "react-icons/md";
import * as api from "../../DAL/api";
import Spinner from "react-bootstrap/Spinner";
import OutOfStockButtons from "../OutOfStockButtons/OutOfStockButtons";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Rating } from "@mui/material";
import useFetch from "../../hooks/useFetch";

export default function CartProduct({ isCart, id, isRating }) {
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
            variant="top"
            src={`http://localhost:3100/images/pianos/${piano.id}/${piano.imgs[0]}`}
            style={{ width: "40vh" }}
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
            {!isRating ? (
              <Row className="justify-content-between">
                {piano.units_in_stock ? (
                  <Col md={8} xs={8}>
                    <Form.Group>
                      <Form.Control
                        type="number"
                        placeholder="Qty."
                        min={1}
                        max={piano.units_in_stock}
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
              <Rating name="simple-controlled" />
            )}
          </Card.Body>
        </Card>
      ) : (
        <Spinner animation="border" variant="primary" />
      )}
    </Row>
  );
}
