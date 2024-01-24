import "./NavigationMobile.scss";
// import { Link } from "react-router-dom";
import Collapsible from "react-collapsible";

export default function NavigationMobile() {
  return (
    <nav className="nav-mobile">
      <article className="about-mobile">
        <Collapsible trigger="ABOUT">
          <div className="about-mobile__textbox">
            <p className="about__text">Hi! &#9996;</p>
            <p className="about__text">
              I am Leta, a recent software engineering diploma graduate. I love
              things that make sense, ticking off lists, and playing code
              detective following a lovely trail of error messages.
            </p>
            <p className="about__text">
              After exploring the social sector and developing my soft and
              problem solving skills, I am going back to my roots - the tech
              industry. Coming originally from a graphic design background and
              now mastering the technical side gives me a unique understanding
              of the development process.
            </p>

            <p className="about__text">
              Do get in touch or check out my socials!
            </p>

            <a
              className="about__text-link"
              href="https://www.linkedin.com/in/leta-krahenbuhl/"
              target="_blank"
              rel="noreferrer"
            >
              &#128391; LinkedIn
            </a>

            <a
              className="about__text-link"
              href="https://github.com/leta-krahenbuhl"
              target="_blank"
              rel="noreferrer"
            >
              &#128187; GitHub
            </a>

            <a
              className="about__text-link"
              href="mailto:leta.krahenbuhl@gmail.com"
            >
              &#x1F4E7; Send me an email
            </a>
          </div>
        </Collapsible>
      </article>

      <p className="nav-mobile__caret1">^^^^^^^^^^</p>

      <article className="projects-mobile">
        <Collapsible trigger="PROJECTS">
          <div className="about-mobile__textbox">
            <p className="about__text">Hi! &#9996;</p>
            <p className="about__text">
              I am Leta, a recent software engineering diploma graduate. I love
              things that make sense, ticking off lists, and playing code
              detective following a lovely trail of error messages.
            </p>
            <p className="about__text">
              After exploring the social sector and developing my soft and
              problem solving skills, I am going back to my roots - the tech
              industry. Coming originally from a graphic design background and
              now mastering the technical side gives me a unique understanding
              of the development process.
            </p>

            <p className="about__text">
              Do get in touch or check out my socials!
            </p>

            <a
              className="about__text-link"
              href="https://www.linkedin.com/in/leta-krahenbuhl/"
              target="_blank"
              rel="noreferrer"
            >
              &#128391; LinkedIn
            </a>

            <a
              className="about__text-link"
              href="https://github.com/leta-krahenbuhl"
              target="_blank"
              rel="noreferrer"
            >
              &#128187; GitHub
            </a>

            <a
              className="about__text-link"
              href="mailto:leta.krahenbuhl@gmail.com"
            >
              &#x1F4E7; Send me an email
            </a>
          </div>
        </Collapsible>
      </article>
    </nav>
  );
}

// ------------------ Old navigation
// export default function NavigationMobile() {
//     return (
//       <nav className="navigation-mobile">
//         <Link to="/about">
//           <p className="navigation-mobile__about">ABOUT</p>
//           <p className="navigation-mobile__caret1">^^^^^^^^^^</p>
//         </Link>
//         <Link to="/projects">
//           <p className="navigation-mobile__projects">PROJECTS</p>
//           <p className="navigation-mobile__caret2">^^^^^^^^^^</p>
//         </Link>
//         <Link to="/education">
//           <p className="navigation-mobile__education">EDUCATiON</p>
//           <p className="navigation-mobile__caret3">^^^^^^^^^^</p>
//         </Link>
//         <Link to="/experience">
//           <p className="navigation-mobile__experience">EXPERiENCE</p>
//           <p className="navigation-mobile__caret4">^^^^^^^^^^</p>
//         </Link>
//       </nav>
//     );
//   }
