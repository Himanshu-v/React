import { isWithinInterval } from "date-fns";
import React, { useState } from "react";

export default function About(props) {
  // const [myStyle, setMyStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });

  // const [btnToggle, setBtnToggle] = useState("Enable Dark Mode");

  // const toggleMode = () => {
  //   if (myStyle.color === "white") {
  //     setMyStyle({
  //       color: "black",
  //       backgroundColor: "white",
  //       border: "2px solid white",
  //     });
  //     setBtnToggle("Enable Light Mode");
  //   } else {
  //     setMyStyle({
  //       color: "white",
  //       backgroundColor: "black",
  //     });
  //     setBtnToggle("Enable Dark Mode");
  //   }
  // };
  const myStyle = {
    color: props.mode === "dark" ? "white" : "black",
    backgroundColor: props.mode === "dark" ? "grey" : "white",
  };

  return (
    <div className="container my-4">
      {" "}
      <h2 style={{ color: props.mode === "dark" ? "white" : "black" }}>
        About
      </h2>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              About website.
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              This website is made available to help the user in text
              manipulation.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              Features.
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              The webite currently has a few features that can be seen on the
              home page.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              About the author.
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              A dedicated developer.
            </div>
          </div>
        </div>
      </div>
      {/* <div>
        <button onClick={toggleMode} className="primary my-3">
          {btnToggle}{" "}
        </button>
      </div> */}
    </div>
  );
}
