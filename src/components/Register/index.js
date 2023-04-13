import React, { useState } from "react";
import ApiUsers from "api/users";
import { Formik, Field, ErrorMessage } from "formik";
import { FormStyles } from "./Register.styles";
import { useNavigate } from "react-router-dom";

const validateFields = (values) => {
  const errors = {};

  if (!values.username) {
    errors.username = "Required username";
  }

  if (!values.password) {
    errors.password = "Required password";
  } else if (values.password.length < 3) {
    errors.password = "Length must be greater than 3";
  }

  return errors;
};

const initialValues = {
  username: "",
  password: "",
};

export default function Register() {
  const [registered, setRegistered] = useState(false);
  const navigate = useNavigate();
  if (registered) {
    return <h4>Congratulations ✅! You've been successfully registered!</h4>;
  }

  return (
    <Formik
      initialValues={initialValues}
      validate={validateFields}
      onSubmit={(values, { setFieldError }) => {
        return ApiUsers.registerUser(values)
          .then(() => {
            setRegistered(true);
            setTimeout(() => navigate("/"), 2000);
          })
          .catch(() => {
            setFieldError("username", "This username is not valid");
          });
      }}
    >
      {({ errors, isSubmitting }) => (
        <FormStyles className="form">
          <h2>Registrarse</h2>
          <Field
            className={errors.username ? "error" : ""}
            name="username"
            placeholder="Put here the username"
          />
          <ErrorMessage
            className="form-error"
            name="username"
            component="small"
          />

          <Field
            className={errors.password ? "error" : ""}
            name="password"
            placeholder="Put here the password"
            type="password"
          />
          <ErrorMessage
            className="form-error"
            name="password"
            component="small"
          />

          <button className="btn" disabled={isSubmitting}>
            Registrarse
          </button>
        </FormStyles>
      )}
    </Formik>
  );
}
