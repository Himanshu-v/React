import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    if (text.length > 0) {
      setText(text.toUpperCase());
      props.showAlert("Converted to uppercase", "success");
    } else {
      props.showAlert("Input cannot be empty.", "warning");
    }
  };
  const handleLoClick = () => {
    if (text.length > 0) {
      setText(text.toLowerCase());
      props.showAlert("Converted to lowerCase", "success");
    } else {
      props.showAlert("Input cannot be empty.", "warning");
    }
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleClearClick = () => {
    setText("");
  };

  const [text, setText] = useState("Enter text here");

  return (
    <>
      <h1>{props.heading}</h1>
      <div
        className=" container mb-3"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <label htmlFor="myBox" className="form-label"></label>
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="8"
          style={{
            backgroundColor: props.mode === "dark" ? "grey" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
        ></textarea>
      </div>
      <button className="btn btn-secondary mx-2" onClick={handleUpClick}>
        Convert to uppercase
      </button>
      <button className="btn btn-secondary mx-2" onClick={handleLoClick}>
        Convert to lowercase
      </button>
      <button className="btn btn-secondary mx-2" onClick={handleClearClick}>
        Clear Text
      </button>
      {/* <div
        className="container mb-3"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        
        <h1>{text.length > 0 ? "Preview" : ""}</h1>
        <p>{text}</p>
      </div> */}
    </>
  );
}
