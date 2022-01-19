import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    setText(text.toUpperCase());
  };
  const handleLoClick = () => {
    setText(text.toLowerCase());
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
      <div className=" container mb-3">
        <label htmlFor="myBox" className="form-label"></label>
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>
        Convert to uppercase
      </button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>
        Convert to lowercase
      </button>
      <button className="btn btn-primary mx-2" onClick={handleClearClick}>
        Clear Text
      </button>
      <div className="container mb-3">
        <h1>You text summary</h1>
        <p>
          The text has {text.split(" ").length} words and {text.length}{" "}
          characters and it should take arount {0.008 * text.split(" ").length}
          minutes to read
        </p>
        <h1>Preview</h1>
        <p>{text}</p>
      </div>
    </>
  );
}
