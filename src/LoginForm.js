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
      title: "Username",
      value: "",
      validations: {
        required: true,
      },
      type: "text",
      errors: [],
    },
    password: {
      title: "Password",
      value: "",
      validations: {
        required: true,
      },
      type: "password",
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
        <h2 className="text-primary">Sign In</h2>
        <div className="line"></div>
      </Row>
      {Object.entries(loginForm).map(([input, inputObj], idx) => {
        return (
          <Row key={idx}>
            <Form.Group>
              <Form.Label>{inputObj.title}</Form.Label>
              <Form.Control
                name={input}
                type={inputObj.type}
                placeholder={inputObj.title}
                isInvalid={inputObj.errors.length}
                defaultValue={inputObj.value}
                onBlur={onValidateHandler}
              />
              {inputObj.errors.map((error, errorIdx) => (
                <Form.Control.Feedback key={errorIdx} type="invalid">
                  {error.value}
                </Form.Control.Feedback>
              ))}
            </Form.Group>
          </Row>
        );
      })}

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
