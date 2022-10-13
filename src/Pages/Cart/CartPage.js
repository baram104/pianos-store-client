import { useContext } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Product from "../../Components/Product/Product";
import { Link } from "react-router-dom";
import UserContext from "../../store/user-context";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteCart } from "../../store/redux-store";

export default function CartPage() {
  // const { userCart, userDetails, deleteCart } = useContext(UserContext);
  const { cart } = useSelector((state) => state.cart);
  const userDetails = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <Container as={Card} className="p-3 my-3">
      <Row>
        <h2>Hello {userDetails.username}, Your Cart</h2>
      </Row>
      <Row className="d-flex justify-content-center">
        {cart.length ? (
          cart.map((product) => (
            <Product
              quantity={product.quantity}
              key={product.id}
              id={product.id}
              isCart={true}
            />
          ))
        ) : (
          <div>Cart Is Empty</div>
        )}
      </Row>
      <Row className="align-items-end d-flex">
        <Col className="justify-content-center d-flex">
          <Button onClick={() => dispatch(deleteCart())} variant="danger">
            Delete Cart
          </Button>
        </Col>
        <Col className="justify-content-center d-flex">
          <Col className="text-center">
            <h3 className="text-primary">
              Summary $
              {cart.length
                ? cart.reduce(
                    (total, currProd) =>
                      total + Number(currProd.unit_price) * currProd.quantity,
                    0
                  )
                : 0}
            </h3>
            <Link to="/checkout">
              <Button>Checkout</Button>
            </Link>
          </Col>
        </Col>
      </Row>
    </Container>
  );
}
