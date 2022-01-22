import "./App.css";
import BasicTable from "./Components/BasicTable";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import SortableTable from "./Components/SortableTable";
import FilteringTable from "./Components/FilteringTable";
import PaginationTable from "./Components/PaginationTable";
import { GlobalFilter } from "./Components/GlobalFilter";
import ColumnOrder from "./Components/ColumnOrder";
import ColumnHiding from "./Components/ColumnHiding";
import About from "./Components/About";
import { useState, Fragment } from "react";
import Alert from "./Components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function AppJSOrg() {
  const [mode, setMode] = useState("light");
  const [btnToggle, setBtnToggle] = useState("Enable Dark Mode");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setBtnToggle("Enable Light Mode");
      document.body.style.backgroundColor = "#081e33";
      showAlert("Dark mode is enabled", "success");
    } else {
      setMode("light");
      setBtnToggle("Enable Dark Mode");
      document.body.style.backgroundColor = "White";
      showAlert("Light mode is enabled", "success");
    }
  };

  const changeBgColor = (bgColor) => {
    document.body.style.backgroundColor = `${bgColor}`;
  };

  return (
    <Router>
      <Fragment>
        <Navbar
          title={"Text Utils"}
          mode={mode}
          toggleMode={toggleMode}
          btnToggle={btnToggle}
          changeBgColor={changeBgColor}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About />} />

            <Route
              exact
              path="/"
              element={<TextForm mode={mode} showAlert={showAlert} />}
            />
          </Routes>
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
