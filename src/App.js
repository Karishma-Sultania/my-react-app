import "./App.css";
import React, { useState } from "react";
import Mynavbar from "./components/Mynavbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import Accordion from "./components/Accordion";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [darkMode, setMode] = useState(false);
  const [alertBox, setAlertBox] = useState({});
  const showAlert = (message, type) => {
    setAlertBox({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlertBox({});
    }, 2000);
  };
  const [bodyStyle, setBodyStyle] = useState({
    marginTop: "1px",
    marginColor: "white",
  });
  const toggleMode = () => {
    if (darkMode) {
      setMode(false);
      document.body.style.background = "white";
    } else {
      setMode(true);
      document.body.style.background = "black";
    }
  };

  return (
    <>
      <Router>
        <Mynavbar
          title="TextUtils"
          about="myabout"
          darkMode={darkMode}
          toggleMode={toggleMode}
        />
        <Alert alertContent={alertBox}></Alert>
        <Routes>
          <Route
            path="/"
            element={
              <TextForm
                heading="Enter your text here .."
                showAlert={showAlert}
                style={bodyStyle}
                upperFn
                darkMode={darkMode}
                toggleMode={toggleMode}
              />
            }
          />
          <Route path="/about" element={<Accordion />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
