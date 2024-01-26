import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../src/Pages/Home/Home";
import Projects from "../src/Pages/Projects/Projects";
import Education from "../src/Pages/Education/Education";
import Experience from "../src/Pages/Experience/Experience";
import About from "./Pages/About/About";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
