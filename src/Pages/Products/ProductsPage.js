import { useEffect, useState } from "react";
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

export default function ProductsPage() {
  const [pianos, setPianos] = useState([]);
  useEffect(() => {
    api.getPianos().then((data) => setPianos(data));
  }, []);
  return (
    <Container fluid className="my-3 align-items-baseline">
      <Row>
        <Col md={3}>
          <ListGroup>
            <ListGroup.Item variant="primary">Categories</ListGroup.Item>
            <ListGroup.Item action>Electric Pianos</ListGroup.Item>
            <ListGroup.Item action>Acoustic Pianos</ListGroup.Item>
          </ListGroup>
        </Col>

        <Col md={9} className="px-5">
          <Row className="mt-0">
            <Col xs={3} className="mt-3">
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
            <Row className="justify-content-between flex-start justify-content-xs-center">
              {pianos.map((piano) => (
                <Card style={{ width: "20rem" }} className="mb-3">
                  <Card.Img
                    variant="top"
                    src={piano.imgs[0].imgSrc}
                    title={piano.imgs[0].imgTitleAlt}
                    className={styles.cardImg}
                  />
                  <Card.Body className="d-flex flex-column justify-content-between">
                    <div>
                      <Card.Title>
                        {piano.name}
                        <span className={styles.wishlistIconContainer}>
                          <img
                            className={styles.wishlistIcon}
                            src={emptyHeart}
                          ></img>
                        </span>
                      </Card.Title>
                      <Card.Text className="text-primary">
                        ${piano.unitPrice}
                      </Card.Text>
                      <Card.Text>{piano.description}</Card.Text>
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
