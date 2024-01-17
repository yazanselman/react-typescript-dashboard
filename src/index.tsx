import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ExcelImport from "./ExcelImport";
import Home from "./home/Home";
import ExcelExport from "./home/ExcelExport";
import Pricing from "./pricing/Pricing";
import MultiEmailInput from "./MultiEmailInput";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <ExcelImport />
    <Home />
    <ExcelExport /> 
    <Pricing /> */}
    <MultiEmailInput />
  </React.StrictMode>
);
