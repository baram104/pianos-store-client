import { Form } from "react-bootstrap";
import "./LoginForm.css";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/esm/Button";
import { useState } from "react";

export default function LoginForm(props) {
  const [loginForm, setLoginForm] = useState({
    username: {
      value: "",
      validations: {
        required: true,
        minLength: 2,
      },
      errors: [],
    },
    password: {
      value: "",
      validations: {
        required: true,
        pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
      },
      errors: [],
    },
  });

  return (
    <Form className="container w-50 mt-5 card">
      <Row>
        <h2>Sign In</h2>
        <div className="line"></div>
      </Row>
      <Row>
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control
            name="username"
            type="text"
            placeholder="Username"
            isInvalid={false}
            defaultValue={loginForm.username.value}
          />
        </Form.Group>
      </Row>
      <Row>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
          />
        </Form.Group>
      </Row>
      <Row className="my-5 justify-content-center">
        <Col md={4}>
          <Button className="w-100" type="submit">
            Submit
          </Button>
        </Col>
      </Row>
    </Form>
  );
}
