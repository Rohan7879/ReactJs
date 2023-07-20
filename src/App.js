import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#343a40";
      showAlert("Dark Mode has been enabled", "success");
      document.title = "TextUtils -Dark Mode";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
      document.title = "TextUtils -Light Mode";
    }
  };
  return (
    <>
      <Router>
        <Navbar title="TextUtils" about="About Textutils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="my-3 container">
          <Routes>
            <Route
              exact
              path="/formText"
              element={<TextForm showAlert={showAlert} textArea="Address" mode={mode} />}
            ></Route>
            <Route exact path="/about" element={<About />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
