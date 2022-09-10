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
import { Link, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

export default function ProductsPage() {
  const params = useParams();

  const {
    loading: loadingPianos,
    data: pianos,
    error: pianosError,
  } = useFetch(api.getPianos, params.category_id, params.category_id);

  const {
    loading: loadingCategories,
    data: categories,
    error: categoriesError,
  } = useFetch(api.getCategories);

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
          {!loadingPianos ? (
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
                          to={`${piano.id}`}
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
                        ${piano.unitPrice}
                      </Card.Text>
                      <Card.Text>{piano.description.slice(0, 50)}...</Card.Text>
                      <Rating
                        name="read-only"
                        value={piano.avgRating}
                        readOnly
                      />
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
