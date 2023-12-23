import React, { useState } from "react";

export default function Textform(props) {
  const handleUpClick = () => {
    // console.log("Upper case was clicked" +text)
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case ", "success");
  };
  const handleClearClick = () => {
    // console.log("Upper case was clicked" +text)
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleard ", "success");
  };
  const handleLowClick = () => {
    // console.log("Upper case was clicked" +text)
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case ", "success");
  };

  const handleOnChange = (event) => {
    console.log("Onchange");
    setText(event.target.value);
  };
  const handleCopy = () => {
    console.log("I m copy ");
    var text = document.getElementById("exampleFormControlTextarea1");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied to Clipboard", "success");
    props.showAlert("Text Copied to Clipboard", "success");
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed Extra Spaces ", "success");
  };
  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "grey",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="exampleFormControlTextarea1"
            rows="8"
          ></textarea>
        </div>
        <button
          className="btn btn-success mx-1"
          type="button"
          onClick={handleUpClick}
        >
          Convert to UpperCase
        </button>
        <button
          className="btn btn-success mx-1"
          type="button"
          onClick={handleLowClick}
        >
          Convert to LowerCase
        </button>
        <button
          className="btn btn-success mx-1"
          type="button"
          onClick={handleClearClick}
        >
          Clear Text
        </button>
        <button
          className="btn btn-success mx-1"
          type="button"
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          className="btn btn-success mx-1"
          type="button"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} Characters{" "}
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to Read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
