import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "./login.css";
import axiosConfig from "../../axios/axiosConfig";

function Login(props) {
  const [field, setFields] = useState({
    email: "",
    password: "",
  });

  const handleFormInfo = async (e) => {
    e.preventDefault();
    const results = await axiosConfig.post("/login-user", field);
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
      <Container className="loginContainer">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <Form
          onSubmit={handleFormInfo}
          className="pt-4 pb-4 d-flex flex-column justify-content-center align-items-center "
        >
          <h1>Login</h1>

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
            onClick={() => props.history.push("/home")}
          >
            Create Account
          </Button>
        </Form>
      </Container>
    </motion.div>
  );
}

export default Login;
