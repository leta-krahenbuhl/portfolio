import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../src/Pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
