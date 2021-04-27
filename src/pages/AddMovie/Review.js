import React from "react";
import { Form, Table } from "react-bootstrap";
import { Field } from "formik";

const Review = (props) => {
  return (
    <div className="d-flex flex-column align-items-start">
      <div className="w-100 d-flex justify-content-center">
        <h4>Review Form</h4>
      </div>
      <Form.Group>
        <Field name="name">
          {(props) => {
            const { field } = props;
            return <h6>Movie Name : {field.value}</h6>;
          }}
        </Field>
      </Form.Group>
      <Form.Group>
        <Field name="description">
          {(props) => {
            const { field } = props;
            return <p>Movie Description : {field.value}</p>;
          }}
        </Field>
      </Form.Group>
      <div className="w-100 d-flex justify-content-center">
        <Form.Group>
          <Field name="casts">
            {(props) => {
              const { field } = props;
              return (
                <Table>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Real Name</th>
                      <th>Character Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    {field.value.map((char, id) => (
                      <tr key={id}>
                        <td>{id + 1}</td>
                        <td>{char.real_name}</td>
                        <td>{char.character_name}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              );
            }}
          </Field>
        </Form.Group>
      </div>
    </div>
  );
};

export default Review;
