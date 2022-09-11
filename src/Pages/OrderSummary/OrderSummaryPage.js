import { Card, Container } from "react-bootstrap";
import party from "party-js";
import { useEffect, useRef, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import * as api from "../../DAL/api";

export default function OrderSummaryPage() {
  const {
    state: { cityValue, streetValue, zipcodeValue },
  } = useLocation();
  const params = useParams();
  const [order, setOrder] = useState([]);
  const containerRef = useRef();
  useEffect(() => {
    party.confetti(containerRef.current, {
      count: party.variation.range(20, 40),
    });
    api.getOrder(params.orderId).then((data) => setOrder(data));
  }, []);
  return (
    <Container ref={containerRef} className="mt-5">
      <Card>
        <Card.Header className="text-primary">
          <h1>
            Your Order #{order.length ? order[0].id : ""} has been placed!
          </h1>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            <strong>You ordered:</strong>
          </Card.Text>
          {order.length
            ? order.map((product) => (
                <Card.Text>
                  <h5>{product.name}</h5>
                  <div className="text-primary"> Qty: {product.quantity}</div>
                </Card.Text>
              ))
            : ""}
          <Card.Text className="fs-3 text-primary">
            Total of: $
            {order.length
              ? order.reduce(
                  (total, product) =>
                    total + Number(product.unit_price) * product.quantity,
                  0
                )
              : ""}
          </Card.Text>

          <Card.Text className="fs-3 text-primary">
            Ships to: {cityValue}, {streetValue}, {zipcodeValue}
          </Card.Text>
          <Card.Text className="fs-2 text-secondary">
            Thanks for buying!
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}
