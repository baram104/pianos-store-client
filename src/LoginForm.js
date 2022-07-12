import { Form } from "react-bootstrap";
import "./LoginForm.css";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/esm/Button";
import { useState } from "react";
import { validateAndUpdateInput } from "./common/helpers";

export default function LoginForm(props) {
  const [loginForm, setLoginForm] = useState({
    username: {
      value: "",
      validations: {
        required: true,
      },
      errors: [],
    },
    password: {
      value: "",
      validations: {
        required: true,
      },
      errors: [],
    },
  });

  const onValidateHandler = ({ target: { name, value } }) => {
    validateAndUpdateInput(name, value, loginForm);
    setLoginForm({ ...loginForm });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let isFormValid = true;
    const loginDetails = [];

    for (const input in loginForm) {
      validateAndUpdateInput(input, loginForm[input].value, loginForm);
      loginDetails.push({ input, value: loginForm[input].value });
      if (loginForm[input].errors.length) isFormValid = false;
    }
    setLoginForm({ ...loginForm });
    if (isFormValid) {
      props.handleLoginDetails(loginDetails);
    }
  };

  return (
    <Form className="container w-50 mt-5 card" onSubmit={handleSubmit}>
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
            isInvalid={loginForm.username.errors.length}
            defaultValue={loginForm.username.value}
            onBlur={onValidateHandler}
          />
          {loginForm.username.errors.map((error, idx) => (
            <Form.Control.Feedback key={idx} type="invalid">
              {error.value}
            </Form.Control.Feedback>
          ))}
        </Form.Group>
      </Row>
      <Row>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            isInvalid={loginForm.password.errors.length}
            defaultValue={loginForm.password.value}
            onBlur={onValidateHandler}
          />
          <Form.Control.Feedback type="invalid">
            Password must be at least eight characters, and must contain at
            least one letter, one number and one special character
          </Form.Control.Feedback>
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
