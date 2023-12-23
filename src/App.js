import { useState } from "react";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import Alert from "./Components/Alert";

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
    }, 1000);
  };
  const togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark Mode has been Enabled", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been Enabled", "success");
    }
  };
  return (
    <>
      <Navbar
        brandname="TextOpera"
        home="Home"
        about="About"
        mode={mode}
        togglemode={togglemode}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        <Textform
          heading="Enter the Text to Analysis"
          showAlert={showAlert}
          mode={mode}
        />
        <About mode={mode} />
      </div>
    </>
  );
}

export default App;
