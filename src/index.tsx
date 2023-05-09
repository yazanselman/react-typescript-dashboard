import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ExcelImport from "./ExcelImport";
import Home from "./home/Home";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
