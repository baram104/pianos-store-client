import { Container, Row, Card, Button, Col } from "react-bootstrap";
import { formInputs } from "../../data/formInputsData";
import CartProduct from "../../Components/Product/CartProduct";
import FormComp from "../../Components/Form/FormComp";

export default function CheckoutPage() {
  const addressForm = {
    city: formInputs.city,
    street: formInputs.street,
    zipcode: formInputs.zipcode,
  };
  return (
    <Container as={Card} className="p-5 my-3">
      <Row className="mx-5">
        <h2>Checkout</h2>
      </Row>
      <Row>
        <Col lg={6} xs={12}>
          <CartProduct id="2" />
          <CartProduct id="1" />
          <CartProduct id="1" />
        </Col>
        <Col lg={6} xs={12}>
          <Row className="h-100">
            <Col xs={12}>
              <FormComp
                formTitle="Ship To"
                isCheckout={true}
                handleFormDetails={() => {}}
                formInputs={addressForm}
              />
            </Col>
            <Col xs={12}>
              <h2 className="text-primary my-3 text-center">Summary $1200</h2>
              <div className="justify-content-center d-flex">
                <Button>Place Order</Button>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row md={2} className="justify-content-center d-flex"></Row>
    </Container>
  );
}
