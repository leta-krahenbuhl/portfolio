import "./MobileAbout.scss";
import Collapsible from "react-collapsible";
import { useNavigate } from "react-router-dom";

export default function MobileAbout() {
  const navigate = useNavigate();
  const isAboutPage = window.location.pathname.endsWith("/about");

  const handleOpen = () => {
    navigate("/about");
  };

  return (
    <article className="about-mobile">
      <Collapsible
        trigger={
          <div role="heading" aria-level="2" id="about-heading">
            ABOUT
          </div>
        }
        open={isAboutPage}
        onOpen={handleOpen}
      >
        <div className="about-mobile__textbox">
          <p className="about-mobile__text">Hi! &#9996;</p>

          <p className="about-mobile__text">
            I am Leta, a seasoned graphic designer (BA) and recent software
            engineering diploma graduate from BrainStation London (passing grade
            92%). I strive for excellence, love all aspects of creating, and am
            driven by passion.
          </p>

          <p className="about-mobile__text">
            After exploring the social sector and developing my soft and problem
            solving skills, I am going back to my roots - the tech industry.
            Coming originally from a graphic design background and now mastering
            the technical side gives me a unique understanding of the
            development process.
          </p>

          <p className="about-mobile__text">
            Do get in touch or check out my socials!
          </p>

          <p className="about-mobile__text">
            &#128391;{" "}
            <a
              className="about-mobile__text-link about-mobile__text-link--extra"
              href="https://www.linkedin.com/in/leta-krahenbuhl/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </p>

          <p className="about-mobile__text">
            &#128187;{" "}
            <a
              className="about-mobile__text-link about-mobile__text-link--extra"
              href="https://github.com/leta-krahenbuhl"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </p>

          <p className="about-mobile__text">
            &#128165;{" "}
            <a
              className="about-mobile__text-link about-mobile__text-link--extra"
              href="https://www.behance.net/leta-krahenbuhl"
              target="_blank"
              rel="noreferrer"
            >
              Behance
            </a>
          </p>

          <p className="about-mobile__text">
            {" "}
            &#x1F4E7;{" "}
            <a
              className="about-mobile__text-link about-mobile__text-link--extra"
              href="mailto:leta.krahenbuhl@gmail.com"
            >
              Send me an email
            </a>
          </p>
          <h3 className="desktop-text-box-about__h3">Tech Stack</h3>
          <ul className="desktop-text-box-about__ul">
            <li className="desktop-text-box-about__li">
              HTML (with BEM), CSS and SASS, JavaScript, React.js (currently
              learning TypeScript), Node.js, Express, MySQL, Knex, Mongoose,
              MongoDB, Firebase
            </li>
            <li className="desktop-text-box-about__li">
              REST APIs, relational/non-relational databases, version control
              with GitHub, fully responsive web development, agile development
              practices, deployment
            </li>
            <li className="desktop-text-box-about__li">
              Photoshop, InDesign, Illustrator, Figma, QuarkXpress
            </li>
          </ul>
        </div>
      </Collapsible>
    </article>
  );
}
