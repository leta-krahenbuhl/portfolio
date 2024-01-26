import "./Navigation.scss";
import { Link, useLocation } from "react-router-dom";

export default function Navigation() {
  const location = useLocation();

  const isCurrentPath = (path) => location.pathname === path;

  return (
    <nav className="navigation">
      <Link to="/about">
        <h2
          className={`navigation__about ${
            isCurrentPath("/about") ? "navigation__about--active" : ""
          }`}
        >
          ABOUT
        </h2>
        <p className="navigation__caret1">^^^^^^^^^^</p>
      </Link>
      <Link to="/projects">
        <h2
          className={`navigation__projects ${
            isCurrentPath("/projects") ? "navigation__projects--active" : ""
          }`}
        >
          PROJECTS
        </h2>
        <p className="navigation__caret2">^^^^^^^^^^</p>
      </Link>
      <Link to="/education">
        <h2
          className={`navigation__education ${
            isCurrentPath("/education") ? "navigation__education--active" : ""
          }`}
        >
          EDUCATiON
        </h2>
        <p className="navigation__caret3">^^^^^^^^^^</p>
      </Link>
      <Link to="/experience">
        <h2
          className={`navigation__experience ${
            isCurrentPath("/experience") ? "navigation__experience--active" : ""
          }`}
        >
          EXPERiENCE
        </h2>
        <p className="navigation__caret4">^^^^^^^^^^</p>
      </Link>
    </nav>
  );
}
