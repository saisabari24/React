import React, { useState } from "react";
import { FormErrors } from "./FormError";

const Login = () => {
  // State variables for email, password, form errors, and form validity
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
  });

  // Function to validate a field based on its name and value
  const validateField = (fieldName, value) => {
    // Create a copy of formErrors to update specific field error
    let fieldValidationErrors = { ...formErrors };

    switch (fieldName) {
      case "email":
        // Validate email format using regular expression
        fieldValidationErrors.email = value.match(/.+\@.+\..+$/)
          ? ""
          : " is invalid";
        break;
      case "password":
        // Validate password length
        fieldValidationErrors.password =
          value.length >= 6 ? "" : " is too short";
        break;
      default:
        break;
    }

    // Update formErrors with the new field error
    setFormErrors(fieldValidationErrors);
  };

  // Event handler for user input in email and password fields
  const handleUserInput = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
    validateField(name, value);
  };

  // Calculate form validity based on formErrors
  const isFormValid = formErrors.email === "" && formErrors.password === "";

  // Event handler for the login action
  const handle = (e) => {
    e.preventDefault();
    alert("Welcome to React Projects");
  };

  return (
    <form className="demoForm bg-info">
      <h4 className="bg-danger text-warning">Sign up</h4>
      <div className="panel panel-default">
        <FormErrors formErrors={formErrors} />
      </div>
      <div className={`form-group ${formErrors.email ? "has-error" : ""}`}>
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          required
          className="form-control"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleUserInput}
        />
      </div>
      <div className={`form-group ${formErrors.password ? "has-error" : ""}`}>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handleUserInput}
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary"
        disabled={!isFormValid}
        onClick={handle}
      >
        Login
      </button>
    </form>
  );
};

export default Login;
