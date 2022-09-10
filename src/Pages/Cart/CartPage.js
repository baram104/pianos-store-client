import { useContext } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Product from "../../Components/Product/Product";
import UserContext from "../../store/user-context";

export default function CartPage() {
  const { userCart, setUserCart, userDetails } = useContext(UserContext);
  return (
    <Container as={Card} className="p-3 my-3">
      <Row>
        <h2>Hello {userDetails.username}, Your Cart</h2>
      </Row>
      <Row className="d-flex justify-content-center">
        {userCart.length ? (
          userCart.map((product) => (
            <Product key={product.id} id={product.id} isCart={true} />
          ))
        ) : (
          <div>Cart Is Empty</div>
        )}
      </Row>
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
