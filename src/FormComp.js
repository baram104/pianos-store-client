import { Form } from "react-bootstrap";
import "./FormComp.css";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/esm/Button";
import { useState } from "react";
import { validateAndUpdateInput } from "./common/helpers";

export default function FormComp(props) {
  const [form, setForm] = useState(props.formInputs);

  const onValidateHandler = ({ target: { name, value } }) => {
    validateAndUpdateInput(name, value, form);
    setForm({ ...form });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let isFormValid = true;
    const formDetails = [];

    for (const input in form) {
      validateAndUpdateInput(input, form[input].value, form);
      formDetails.push({ input, value: form[input].value });
      if (form[input].errors.length) isFormValid = false;
    }
    setForm({ ...form });
    if (isFormValid) {
      props.handleFormDetails(formDetails);
    }
  };

  return (
    <Form className="container w-50 mt-5 card" onSubmit={handleSubmit}>
      <Row>
        <h2 className="text-primary">{props.formTitle}</h2>
        <div className="line"></div>
      </Row>
      {Object.entries(form).map(([input, inputObj], idx) => {
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
                  {error}
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
