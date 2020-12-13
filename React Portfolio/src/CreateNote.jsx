import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Form, Container } from "react-bootstrap";
import "./styles.css";

export default function CreateNote(props) {
  const [expend, setExpend] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const InputEvent = (event) => {
    // const value=event.target.value;
    // const name=event.target.name;

    const { name, value } = event.target;
    setNote((prevData) => {
      return {
        ...prevData,
        [name]: value
      };
    });
  };

  const addEvent = () => {
    props.passNote(note);
    setNote({
      title: "",
      content: ""
    });
  };

  const expendit = () => {
    setExpend(true);
  };
  const shrinkit = () => {
    setExpend(false);
  };

  return (
    <div className="App" onDoubleClick={shrinkit}>
      <Container>
        <Form.Group>
          {expend ? (
            <Form.Control
              size="lg"
              name="title"
              className="Title"
              value={note.title}
              onChange={InputEvent}
              type="text"
              placeholder="Title"
            />
          ) : null}
          <br />
          <Form.Control
            as="textarea"
            rows={3}
            className="Note"
            value={note.content}
            onChange={InputEvent}
            name="content"
            cols="30"
            rows="10"
            onClick={expendit}
            placeholder="Write a Note.."
          />
          <br />
          {expend ? (
            <Button onClick={addEvent} className="plus_sign">
              <AddIcon />
            </Button>
          ) : null}
        </Form.Group>
      </Container>
    </div>
  );
}
