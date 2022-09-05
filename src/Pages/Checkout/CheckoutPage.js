import { Container, Row, Card, Button, Col } from "react-bootstrap";
import { formInputs } from "../../DAL/data/formInputsData";
import Product from "../../Components/Product/Product";
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
        <Col lg={7} xs={12}>
          <Product id="2" />
          <Product id="1" />
          <Product id="1" />
        </Col>
        <Col lg={5} xs={12} className="">
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
