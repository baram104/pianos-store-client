import { Button, Card, Col, Container, Row } from "react-bootstrap";
import CartProduct from "../../Components/Product/CartProduct";

export default function CartPage() {
  return (
    <Container as={Card} className="p-3 my-3">
      <Row>
        <h2>Hello Bar, Your Cart</h2>
      </Row>
      <CartProduct id="2" isCart={true} />
      <CartProduct id="1" isCart={true} />
      <Row className="align-items-end d-flex">
        <Col className="justify-content-center d-flex">
          <Button variant="danger">Delete Cart</Button>
        </Col>
        <Col className="justify-content-center d-flex">
          <Col className="text-center">
            <h3 className="text-primary">Summary $1200</h3>
            <Button>Checkout</Button>
          </Col>
        </Col>
      </Row>
    </Container>
  );
}
