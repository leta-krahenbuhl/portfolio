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
          <p className="about-mobile__text">Hi! 👩‍💻</p>

          <p className="about-mobile__text">
            I am Leta. After exploring the social sector and honing my soft and
            problem solving skills, I am going back to my roots - the tech
            industry.
          </p>

          <p className="about-mobile__text">
            Last year I graduated with a diploma in Software Engineering,
            finishing with a 92% grade. Since then I've worked a temporary
            contract for a geotech start-up, where I designed and developed a
            cargo security app. Currently, I am working on personal projects;
            check out the project section to learn more about them.
          </p>

          <p className="about-mobile__text">
            I love creating, ticking off lists, and playing code detective
            following a trail of error messages whilst listening to my coding
            playlist. Coming originally from a graphic design background and now
            mastering the technical side of creating gives me a unique
            understanding of the development process.
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
              HTML (with BEM), CSS and SASS, JavaScript, React
            </li>
            <li className="desktop-text-box-about__li">
              Node.js, Express, MySQL, Knex, MongoDB, Mongoose, Firebase
            </li>
            <li className="desktop-text-box-about__li">
              REST APIs, version control with GitHub, fully responsive web
              development, agile development practices, deployment (with Heroku
              and Railway)
            </li>
            <li className="desktop-text-box-about__li">
              Learning next: TypeScript, Python and React Native
            </li>
          </ul>
        </div>
      </Collapsible>
    </article>
  );
}
