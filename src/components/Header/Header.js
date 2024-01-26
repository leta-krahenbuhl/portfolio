import "./Header.scss";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <Link to="/">
        <div className="header__logo">
          <p className="header__leta">LETA</p>
          <p className="header__krahen">KRäHENBüHL</p>
          <p className="header__caret">^^^^^^^^^^</p>
        </div>
      </Link>
    </header>
  );
}
