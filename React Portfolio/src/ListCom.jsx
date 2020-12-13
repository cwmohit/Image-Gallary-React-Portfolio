import React, { useState } from "react";

import DeleteIcon from "@material-ui/icons/Delete";

const ListCom = (props) => {
  const [line, setLine] = useState(false);

  const cutIt = () => {
    setLine(true);
  };

  return (
    <div className="todo_style">
      <div style={{ display: line ? "none" : "flex" }}>
        <span onClick={cutIt}>
          <DeleteIcon className="deleteIcon" />
        </span>

        <li>{props.text}</li>
      </div>
    </div>
  );
};

export default ListCom;
