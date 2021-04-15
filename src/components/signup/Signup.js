import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "./signup.css";
import axiosConfig from "../../axios/axiosConfig";
import { motion } from "framer-motion";

function Signup(props) {
  const [field, setFields] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleFormInfo = async (e) => {
    e.preventDefault();
    const results = await axiosConfig.post("/register-user", field);
    const data = results.data;
    console.log("data", data);
  };

  const handleFieldChange = (e) => {
    setFields((prevProps) => ({
      ...prevProps,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Container className="signupContainer">
        <span></span>
        <span></span>
        <span></span>
        <span></span>

        <Form
          onSubmit={handleFormInfo}
          className=" pt-3 pb-3 d-flex flex-column justify-content-center align-items-center "
        >
          <h1>Create New Account</h1>
          <Col className="p-1 input_ref">
            <Form.Control
              type="text"
              name="firstName"
              value={field.firstName}
              onChange={handleFieldChange}
              className="bg-dark border-0"
              placeholder="First name"
            />
          </Col>
          <Col className="p-1 input_ref">
            <Form.Control
              type="text"
              name="lastName"
              value={field.lastName}
              onChange={handleFieldChange}
              className="bg-dark border-0"
              placeholder="Last name"
            />
          </Col>
          <Col className="p-1 input_ref">
            <Form.Control
              type="text"
              name="email"
              value={field.email}
              onChange={handleFieldChange}
              className="bg-dark border-0"
              placeholder="Email"
            />
          </Col>
          <Col className="p-1 input_ref">
            <Form.Control
              type="text"
              name="password"
              value={field.password}
              onChange={handleFieldChange}
              className="bg-dark border-0"
              placeholder="Password"
            />
          </Col>
          <Button
            type="submit"
            className="mt-2 signup_button"
            variant="info"
            onClick={() => props.history.push("/login")}
          >
            Create Account
          </Button>
        </Form>
      </Container>{" "}
    </motion.div>
  );
}

export default Signup;
