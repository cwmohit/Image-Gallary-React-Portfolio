import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Sresult from "./Sresult";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Form, FormControl, Button } from "react-bootstrap";
const Search = () => {
  const [img,setImg]=useState('');
  const inputEvent=(event)=>{
   const data = event.target.value;
   setImg(data);
  }
  return (
    <>
      <Header />
      <Form className=" my-5 ">
        <FormControl
          className="w-50 m-auto"
          type="text"
          placeholder="Search Something"
          value={img}
          onChange={inputEvent}
        />
      </Form>
      {img===""? null : <Sresult name={img}/>} 
      <Footer />
    </>
  );
};

export default Search;
