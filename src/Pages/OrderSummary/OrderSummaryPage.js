import { Card, Container } from "react-bootstrap";

export default function OrderSummaryPage() {
  return (
    <Container className="mt-5">
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
