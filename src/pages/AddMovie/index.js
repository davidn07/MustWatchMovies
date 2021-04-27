import React, { useState } from "react";
import Step1Form from "./Step1Form";
import Step2Form from "./Step2Form";
import Review from "./Review";
import { Formik, Form } from "formik";
import { addMovie } from "_action/movies";
import { connect } from "react-redux";
import _ from "lodash";

const Index = (props) => {
  const [step, setStep] = useState(1);

  const initialValues = {
    name: "",
    description: "",
    banner: "",
    casts: [
      {
        real_name: "",
        character_name: "",
        image: "",
      },
    ],
    cast: [""],
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const onSubmit = (values) => {
    if (step === 3) {
      props.dispatch(addMovie(values));
      props.history.push("/");
    } else {
      setStep(step + 1);
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form>
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "80vh" }}
        >
          <div className="card p-2 w-50 card-style2">
            {
              {
                1: <Step1Form />,
                2: <Step2Form />,
                3: <Review />,
              }[step]
            }
            <div className="d-flex justify-content-around">
              {step === 1 ? null : (
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={prevStep}
                >
                  Back
                </button>
              )}

              <button type="submit" className="btn btn-primary">
                {step === 3 ? "Submit" : "Next"}
              </button>
            </div>
          </div>
        </div>
      </Form>
    </Formik>
  );
};

export default connect()(Index);
