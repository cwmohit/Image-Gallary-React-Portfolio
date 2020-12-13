import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Image } from "react-bootstrap";
import mohit1 from "./Images/mohit1.jpg";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Jumbotron, Container } from "react-bootstrap";
import "./styles.css";
const About = () => {
  return (
    <>
      <Header />

      <Jumbotron className="bg-info about" fluid>
        <Container>
          <div className="w-50 m-auto">
            <Image src={mohit1} className="" fluid alt="img" />
          </div>
          <div className="text-center my-2">
            <h1>Mohit Kandhari</h1>
            <p>
              I'm passionate in Developing awesome websites. I believe in idea,
              imagination and implementation. My strength is my parents and self
              motivation. I'm hardworking and passionate developer. I believe my
              consistency and efforts
            </p>
          </div>
        </Container>
      </Jumbotron>
    </>
  );
};

export default About;
