import React from "react";
import { FieldArray, Field } from "formik";
import { Form } from "react-bootstrap";

const Step2Form = () => {
  return (
    <div className="d-flex flex-column align-items-center">
      <h4>Step 2</h4>
      <Form.Group className="w-100">
        <FieldArray name="casts">
          {(props) => {
            const { push, remove, form } = props;
            const { values } = form;
            const { casts, cast } = values;
            return casts.map((cast, index) => (
              <div key={index} className="d-flex jusftify-content-between">
                <Field name={`casts[${index}].real_name`}>
                  {(props) => {
                    const { field } = props;
                    return <Form.Control placeholder="Real Name" {...field} />;
                  }}
                </Field>
                <Field name={`casts[${index}].character_name`}>
                  {(props) => {
                    const { field } = props;
                    return <Form.Control placeholder="Chara Name" {...field} />;
                  }}
                </Field>
                <Field name={`casts[${index}].image`}>
                  {(props) => {
                    const { field } = props;
                    return <Form.Control placeholder="Image URL" {...field} />;
                  }}
                </Field>
                {index > 0 ? (
                  <button
                    className="btn"
                    onClick={() => {
                      if (index > 0) {
                        remove();
                      }
                    }}
                  >
                    -
                  </button>
                ) : null}

                <button
                  className="btn"
                  type="button"
                  onClick={() => {
                    push({
                      real_name: "",
                      character_name: "",
                      image: "",
                    });
                  }}
                >
                  +
                </button>
              </div>
            ));
          }}
        </FieldArray>
      </Form.Group>
    </div>
  );
};

export default Step2Form;
