import React from "react";
import Container from "react-bootstrap/Container";
import "./App.css";
import Navigation from "./container/navbar/Navigation";

function App() {
  return (
    <Container className="appContainer ">
      <Navigation />
    </Container>
  );
}

export default App;
