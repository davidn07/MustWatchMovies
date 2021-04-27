import React from "react";
import { Field } from "formik";
import { Form } from "react-bootstrap";

const Step1Form = () => {
  return (
    <div className="d-flex flex-column align-items-center">
      <h4>Step 1</h4>
      <Form.Group className="w-75">
        <Field name="name">
          {(props) => {
            const { field } = props;
            return <Form.Control placeholder="Movie Name" {...field} />;
          }}
        </Field>
      </Form.Group>
      <Form.Group className="w-75">
        <Field name="description">
          {(props) => {
            const { field } = props;
            return (
              <Form.Control placeholder="A little about the movie" {...field} />
            );
          }}
        </Field>
      </Form.Group>
      <Form.Group className="w-75">
        <Field name="banner">
          {(props) => {
            const { field } = props;
            return (
              <Form.Control
                placeholder="Enter the URL for image here"
                {...field}
              />
            );
          }}
        </Field>
      </Form.Group>
    </div>
  );
};

export default Step1Form;
