import "./Navigation.scss";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="navigation">
      <Link to="/about">
        <h2 className="navigation__about">ABOUT</h2>
        <p className="navigation__caret1">^^^^^^^^^^</p>
      </Link>
      <Link to="/projects">
        <h2 className="navigation__projects">PROJECTS</h2>
        <p className="navigation__caret2">^^^^^^^^^^</p>
      </Link>
      <Link to="/education">
        <h2 className="navigation__education">EDUCATiON</h2>
        <p className="navigation__caret3">^^^^^^^^^^</p>
      </Link>
      <Link to="/experience">
        <h2 className="navigation__experience">EXPERiENCE</h2>
        <p className="navigation__caret4">^^^^^^^^^^</p>
      </Link>
    </nav>
  );
}
