import { Card, Container } from "react-bootstrap";
import party from "party-js";
import { useEffect, useRef } from "react";

export default function OrderSummaryPage() {
  const containerRef = useRef();
  useEffect(() => {
    party.confetti(containerRef.current, {
      count: party.variation.range(20, 40),
    });
  }, []);
  return (
    <Container ref={containerRef} className="mt-5">
      <Card>
        <Card.Header className="text-primary">
          <h1>Your Order has been placed!</h1>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            <strong>You ordered:</strong>
          </Card.Text>
          <Card.Text>1 Yamaha p-115</Card.Text>
          <Card.Text>2 Yamaha grand piano</Card.Text>
          <Card.Text className="fs-3 text-secondary">
            Thanks for buying!
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}
