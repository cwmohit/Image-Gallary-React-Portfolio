import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Container } from "react-bootstrap";
import "./styles.css";

export default function Note(props) {
  const deleteNote = () => {
    props.deleteItem(props.id);
  };

  return (
    <>
      <div className="card">
        <Container>
          <Row>
            <Col>
              <h2>{props.title}</h2>
              <p>{props.content}</p>

              <Button onClick={deleteNote} className="plus_sign">
                <DeleteIcon />
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
