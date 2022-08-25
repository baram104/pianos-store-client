import { Button, Card, Col, Container, Row } from "react-bootstrap";
import CartProduct from "../../Components/Product/CartProduct";
export default function RateOrderPage() {
  return (
    <Container as={Card} className="p-3 my-3">
      <Row>
        <h2>Hello Bar, Rate your order products</h2>
      </Row>
      <Row className="d-flex justify-content-center">
        <CartProduct id="2" isRating={true} />
        <CartProduct id="1" isRating={true} />
      </Row>
      <Row className="align-items-end d-flex">
        <Col className="justify-content-center d-flex">
          <Col className="text-center">
            <Button>Submit</Button>
          </Col>
        </Col>
      </Row>
    </Container>
  );
}
