import { BrowserRouter, Route, Routes } from "react-router-dom";
import ExcelImport from "./ExcelImport";
import Home from "./home/Home";
import MultiEmailInput from "./MultiEmailInput";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />}>
          <Route path="/login" element={<ExcelImport />} />
          <Route path="/email" element={<MultiEmailInput />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
