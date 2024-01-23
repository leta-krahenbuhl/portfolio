import "./Navigation.scss";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navigation">
      <Link to="/about">
        <p className="navigation__about">ABOUT</p>
        <p className="navigation__caret1">^^^^^^^^^^</p>
      </Link>
      <Link to="/projects">
        <p className="navigation__projects">PROJECTS</p>
        <p className="navigation__caret2">^^^^^^^^^^</p>
      </Link>
      <Link to="/education">
        <p className="navigation__education">EDUCATiON</p>
        <p className="navigation__caret3">^^^^^^^^^^</p>
      </Link>
      <Link to="/experience">
        <p className="navigation__experience">EXPERiENCE</p>
        <p className="navigation__caret4">^^^^^^^^^^</p>
      </Link>
    </nav>
  );
}
