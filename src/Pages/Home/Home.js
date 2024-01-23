import "./Home.scss";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <article className="home">
      <header className="header">
        <Link to="/">
          <div className="header__logo">
            <p className="header__leta">LETA</p>
            <p className="header__krahen">KRäHENBüHL</p>
            <p className="header__caret">^^^^^^^^^^</p>
          </div>
        </Link>

        <article className="header-part2">
          <p className="header-part2__junior">JUNiOR</p>
          <p className="header-part2__software">SOFTWARE</p>
          <p className="header-part2__engineer">ENGiNEER</p>
          <p className="header-part2__caret2">^^^^^^^^^^</p>
          <p className="header-part2__london">LONDON</p>
          <p className="header-part2__caret3">^^^^^^^^^^</p>
        </article>
      </header>
      <nav className="nav"></nav>
      <main className="main"></main>
    </article>
  );
}
