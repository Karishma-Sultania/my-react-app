import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("My text here");
  const onConvertClick = () => {
    props.showAlert('converted to uppercase','success');
    setText(text.toUpperCase());
  };
  const onTextChange = (event) => {
    setText(event.target.value);
  };
  // setText("this is my text");
  return (
    <>
      <div className={`mt-1 px-4 bg-${props.darkMode ? "dark" : "light"} text-${props.darkMode ? "light" : "dark"}`} >
        <label
          htmlFor="exampleFormControlTextarea1"
          className="form-label my-3"
        >
          {props.heading}
        </label>
        <textarea
          className={`form-control text-${props.darkMode ? "light" : "dark"} bg-${props.darkMode ? "dark" : "light"}`}
          id="exampleFormControlTextarea1"
          rows="7"
          value={text}
          onChange={onTextChange}
        ></textarea>
        <button className={`btn btn-outline-${props.darkMode ? "light" : "dark"} my-3`} onClick={onConvertClick}>
          Convert to Uppercase
        </button>
      </div>
      <div className={`px-4 py-4 bg-${props.darkMode ? "dark" : "light"} text-${props.darkMode ? "light" : "dark"}`}>
        <h6>Text Summary</h6>
        <div>{text.trim()!==""?text.trim().split(" ").length:0} words and {text.trim().length} char</div>
      </div>
    </>
  );
}
