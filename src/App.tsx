import { BrowserRouter, Route, Routes } from "react-router-dom";
import ExcelImport from "./ExcelImport";
import Home from "./home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<ExcelImport />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
