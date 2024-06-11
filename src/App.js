//import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
//import About from "./components/About";

import React from "react";
//import { BrowserRouter as Router, Route, Routes,Link } from "react-router-dom";

function App() {
  const [modemsg, changemodemsg] = useState("enable dark mode");

  const [mode, setmode] = useState("light"); //whether dark mode is enable or not
  const [alert, setalert] = useState(null); //humne null is liye likha q ki by default hume alert message nhi dikhana he jb click kare tbhi alert message dikhana he

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#042743";
      document.body.style.color = "white";
      showAlert("Dark mode has been enabled", "success");
      changemodemsg("enable light mode");
      document.title = "TextUtils-Dark Mode";

      // setInterval(() => {
      //   document.title = "TextUtils is Amazing Mode";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUtils-Dark Mode";
      // }, 1500);
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("light mode has been enabled", "success");
      changemodemsg("enable dark mode");
      document.title = "TextUtils-light Mode";
    }
  };
  return (
    <>
      {/* <Navbar title="TextUtilsaaaa" abouttext="aboutmycontent"/> */}
     {/* <Router> */}
        <Navbar
          title="textUtiles"
          mode={mode}
          toggleMode={toggleMode}
          modemsg={modemsg}
        />
        {/* <Routes>
  <Route exact path="/" component={Home} />
  <Route path="/quiz" component={Quiz} />
  <Home /> // <-- remove this
</Routes> */}
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes> */}
            {/* <Route exact path="/about" element={<About />}></Route> */}
           
            {/* <Route exact path="/home" element={ */}
              <TextForm
                showAlert={showAlert}
                heading="enter the text to analyse below"
                mode={mode}
              />
              {/* }> */}
              
            {/* </Route> */}
          {/* </Routes> */}
        </div>
      {/* </Router> */}

      {/* <div className="container my-3">
      <About/>
      </div> */}
    </>
  );
}

export default App;
