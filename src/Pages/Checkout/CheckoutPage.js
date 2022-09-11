import { Container, Row, Card, Button, Col } from "react-bootstrap";
import { formInputs } from "../../DAL/data/formInputsData";
import Product from "../../Components/Product/Product";
import FormComp from "../../Components/Form/FormComp";
import { useContext, useEffect, useState } from "react";
import UserContext from "../../store/user-context";
import { useNavigate, useParams } from "react-router-dom";
import * as api from "../../DAL/api";

export default function CheckoutPage() {
  const nav = useNavigate();
  const params = useParams();
  const [products, setProducts] = useState([]);
  const ctx = useContext(UserContext);
  const addressForm = {
    city: formInputs.city,
    street: formInputs.street,
    zipcode: formInputs.zipcode,
  };
  useEffect(() => {
    if (params.prodId) {
      api.getPiano(params.prodId).then((data) => setProducts([data]));
    } else {
      setProducts(ctx.userCart);
    }
  }, []);

  const handleSubmit = async () => {
    const {
      city: { value: cityValue },
      street: { value: streetValue },
      zipcode: { value: zipcodeValue },
    } = addressForm;
    if (products.length) {
      await api.updateUserAddress(cityValue, streetValue, zipcodeValue);
      const res = await api.placeOrder(
        products.map((product) => {
          return { quantity: product.quantity || 1, product: product.id };
        })
      );

      if (res.orderId) {
        nav(`/ordersummary/${res.orderId}`);
      }
    }
  };

  return (
    <Container as={Card} className="p-5 my-3">
      <Row className="mx-5">
        <h2>Checkout</h2>
      </Row>
      <Row>
        <Col lg={7} xs={12}>
          {products.map((product) => (
            <Product
              id={product.id}
              key={product.id}
              quantity={product.quantity || 1}
            />
          ))}
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
              <h2 className="text-primary my-3 text-center">
                Summary $
                {products.reduce(
                  (total, product) =>
                    total + Number(product.unit_price || product.unitPrice),
                  0
                )}
              </h2>
              <div className="justify-content-center d-flex">
                <Button onClick={handleSubmit}>Place Order</Button>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row md={2} className="justify-content-center d-flex"></Row>
    </Container>
  );
}
