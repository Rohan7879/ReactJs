import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    // let newText = text.toUpperCase();
    setText(text.toUpperCase());
    props.showAlert("Convert into Uppercase", "success");
  };
  const handleLoClick = () => {
    // console.log("Uppercase was clicked" + text);
    // let newText = text.toUpperCase();
    setText(text.toLowerCase());
    props.showAlert("Convert into Lowercase", "success");
  };
  const handleClear = () => {
    // console.log("Uppercase was clicked" + text);
    // let newText = text.toUpperCase();
    setText("");
    props.showAlert("Clear", "success");
  };
  const handleCopy = () => {
    console.log("Copy Text");
    var txt = document.getElementById("box1");
    txt.select();
    navigator.clipboard.writeText(txt.value);
    props.showAlert("Copy text", "success");
  };
  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  //   text = "Enter th Text 2";  // wrong way to change the state
  //   setText("Enter th Text 2"); // correct way to change the state
  return (
    <>
      <div>
        <div className="container" style={{ color: props.mode === "dark" ? "white" : "black" }}>
          <div className="mb-3">
            <h1 htmlFor="exampleInputPassword1" className="form-label">
              {props.textArea}
            </h1>
            <textarea
              type="text"
              style={{
                backgroundColor: props.mode === "dark" ? "#343a40" : "white",
                color: props.mode === "dark" ? "white" : "black",
              }}
              value={text}
              className="form-control"
              onChange={handleOnChange}
              id="box1"
              rows="8"></textarea>
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button className="btn btn-primary mx-1" onClick={handleUpClick}>
            Convert to Uppercase
          </button>
          <button className="btn btn-primary mx-1" onClick={handleLoClick}>
            Convert to Lowercase
          </button>
          <button className="btn btn-primary mx-1" onClick={handleClear}>
            Clear
          </button>
          <button className="btn btn-primary mx-1" onClick={handleCopy}>
            Copy Text
          </button>
        </div>
      </div>
      <div className="container my-3" style={{ color: props.mode === "dark" ? "white" : "black" }}>
        <h3>Your Text summary</h3>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Enter somthing in the textbox to Preview"}</p>
      </div>
    </>
  );
}

TextForm.propTypes = {
  textArea: PropTypes.string.isRequired,
};

TextForm.defaultProps = {
  textArea: "Enter text",
};
