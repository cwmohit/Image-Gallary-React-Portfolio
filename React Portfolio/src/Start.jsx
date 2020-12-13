import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note";
import "./styles.css";

export default function Start() {
  const [addItem, setAddItem] = useState([]);

  const addNote = (note) => {
    // alert("I am clicked");
    setAddItem((prevData) => {
      return [...prevData, note];
    });
  };

  const onDelete = (id) => {
    console.log("deleted");

    setAddItem((olditems) => {
      return olditems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };
  return (
    <div className="App">
      <Header /> <hr />
      <CreateNote passNote={addNote} />
      <br />
      {addItem.map((val, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            deleteItem={onDelete}
          />
        );
      })}
      <Footer />
    </div>
  );
}
