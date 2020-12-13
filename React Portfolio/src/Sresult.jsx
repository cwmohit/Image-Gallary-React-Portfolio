import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Image } from "react-bootstrap";
const Sresult = (props) => {
  const img = `https://source.unsplash.com/400x300/?${props.name}`;
  return (
    <>
      <div className="m-auto w-50">
      <Image src={img} alt="search" fluid />
        {/* <img src={img} alt="search"/> */}
      </div>
    </>
  );
};

export default Sresult;
