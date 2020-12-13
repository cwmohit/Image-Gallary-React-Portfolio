import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { Container, Card, Button } from "react-bootstrap";
const Home = () => {
  return (
    <>
      <Header />
      <Container className="my-5">
        <Card style={{ width: "18rem", margin: "auto" }}>
          <Card.Img
            variant="top"
            src="https://source.unsplash.com/400x400/?notes,book"
          />
          <Card.Body>
            <Card.Title>Notes Keep</Card.Title>
            <Card.Text>
              Notes Keep is the easiest way to keep your notes in your web
              application.
            </Card.Text>
            <Button variant="dark">
              <NavLink to="/Start">Start</NavLink>
            </Button>
          </Card.Body>
        </Card>
      </Container>

      <Footer />
    </>
  );
};

export default Home;
