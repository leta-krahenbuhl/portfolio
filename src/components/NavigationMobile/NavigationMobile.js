import "./NavigationMobile.scss";
import { Link } from "react-router-dom";

export default function NavigationMobile() {
  return (
    <nav className="navigation-mobile">
      <Link to="/about">
        <p className="navigation-mobile__about">ABOUT</p>
        <p className="navigation-mobile__caret1">^^^^^^^^^^</p>
      </Link>
      <Link to="/projects">
        <p className="navigation-mobile__projects">PROJECTS</p>
        <p className="navigation-mobile__caret2">^^^^^^^^^^</p>
      </Link>
      <Link to="/education">
        <p className="navigation-mobile__education">EDUCATiON</p>
        <p className="navigation-mobile__caret3">^^^^^^^^^^</p>
      </Link>
      <Link to="/experience">
        <p className="navigation-mobile__experience">EXPERiENCE</p>
        <p className="navigation-mobile__caret4">^^^^^^^^^^</p>
      </Link>
    </nav>
  );
}
