import "./Header.scss";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <Link to="/">
        <div className="header__logo">
          <h1 className="header__leta">LETA</h1>
          <h1 className="header__krahen">KRäHENBüHL</h1>
          <p className="header__caret">^^^^^^^^^^</p>
        </div>
      </Link>
    </header>
  );
}
