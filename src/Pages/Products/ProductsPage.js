import { useEffect, useState } from "react";
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
import { Link } from "react-router-dom";

export default function ProductsPage() {
  const [pianos, setPianos] = useState([]);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    api.getPianos().then((data) => setPianos(data));
    api.getCategories().then((data) => setCategories(data));
  }, []);
  return (
    <Container fluid className="align-items-baseline">
      <Row className="my-0">
        {categories.length ? (
          <Col md={3} className={`${styles.categoryBg} border-end`}>
            <ListGroup variant="flush">
              {categories.map((category) => (
                <ListGroup.Item
                  key={category.id}
                  action
                  className="bg-transparent"
                >
                  {category.name}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
        ) : (
          ""
        )}

        <Col md={9} className="py-4 px-5">
          <Row className="mt-0">
            <Col xs={3} className="mt-0">
              <Form.Select aria-label="Default select example">
                <option>Sort by</option>
                <option value="1">Price low to high</option>
                <option value="2">Price high to low</option>
                <option value="3">Newest products</option>
                <option value="4">Oldest products</option>
                <option value="5">Default</option>
              </Form.Select>
            </Col>
          </Row>
          {pianos.length ? (
            <Row
              className={`justify-content-between flex-start justify-content-xs-center`}
            >
              {pianos.map((piano) => (
                <Card
                  key={piano.id}
                  style={{ width: "20rem", height: "35rem" }}
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
                          to={`products/${piano.id}`}
                          style={{ textDecoration: "none" }}
                        >
                          {piano.name}
                        </Link>
                        <span className={styles.wishlistIconContainer}>
                          <img
                            className={styles.wishlistIcon}
                            src={emptyHeart}
                          ></img>
                        </span>
                      </Card.Title>
                      <Card.Text className="text-primary">
                        ${piano.unit_price}
                      </Card.Text>
                      <Card.Text>{piano.description.slice(0, 50)}...</Card.Text>
                      <Rating name="read-only" value={3} readOnly />
                    </div>
                    <div className="mt-2">
                      <div className="text-center">
                        <Button variant="primary" className="m-1">
                          But it Now
                        </Button>
                        <Button variant="secondary">Add to Cart</Button>
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
