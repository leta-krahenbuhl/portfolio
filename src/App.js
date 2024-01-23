import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../src/Pages/Home/Home";
import About from "../src/Pages/About/About";
import Projects from "../src/Pages/Projects/Projects";
import Education from "../src/Pages/Education/Education";
import Experience from "../src/Pages/Experience/Experience";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
