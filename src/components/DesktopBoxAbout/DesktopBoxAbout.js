import "./DesktopBoxAbout.scss";

export default function DesktopBoxAbout() {
  return (
    <article className="desktop-text-box-about">
      <main className="desktop-text-box-about__main">
        <p className="desktop-text-box-about__text">Hi! &#9996;</p>

        <p className="desktop-text-box-about__text">
          I am Leta, a seasoned graphic designer (BA) and recent software
          engineering diploma graduate from BrainStation London (passing grade
          92%). I strive for excellence, love all aspects of creating, and am
          driven by passion.
        </p>

        <p className="desktop-text-box-about__text">
          After exploring the social sector and developing my soft and problem
          solving skills, I am going back to my roots - the tech industry.
          Coming originally from a graphic design background and now mastering
          the technical side gives me a unique understanding of the development
          process.
        </p>

        <p className="desktop-text-box-about__text">
          Do get in touch or check out my socials!
        </p>

        <div className="desktop-text-box-about__text">
          <p className="desktop-text-box-about__text desktop-text-box-about__text--icon">
            &#128391;{" "}
            <a
              className="desktop-text-box-about__text-link"
              href="https://www.linkedin.com/in/leta-krahenbuhl/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </p>
        </div>

        <div className="desktop-text-box-about__text">
          <p className="desktop-text-box-about__text desktop-text-box-about__text--icon">
            &#128187;{" "}
            <a
              className="desktop-text-box-about__text-link"
              href="https://github.com/leta-krahenbuhl"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </p>
        </div>

        <div className="desktop-text-box-about__text">
          <p className="desktop-text-box-about__text desktop-text-box-about__text--icon">
            &#128165;{" "}
            <a
              className="desktop-text-box-about__text-link"
              href="https://www.behance.net/leta-krahenbuhl"
              target="_blank"
              rel="noreferrer"
            >
              Behance
            </a>
          </p>
        </div>

        <div className="desktop-text-box-about__text">
          <p className="desktop-text-box-about__text desktop-text-box-about__text--icon">
            &#x1F4E7;{" "}
            <a
              className="desktop-text-box-about__text-link"
              href="mailto:leta.krahenbuhl@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Say hi via Email
            </a>
          </p>
        </div>

        <h3 className="desktop-text-box-about__h3">Tech Stack</h3>
        <ul className="desktop-text-box-about__ul">
          <li className="desktop-text-box-about__li">
            HTML (with BEM), CSS and SASS, JavaScript, React.js (currently
            learning TypeScript), Node.js, Express, MySQL, Knex, Mongoose,
            MongoDB, Firebase
          </li>
          <li className="desktop-text-box-about__li">
            REST APIs, relational/non-relational databases, version control with
            GitHub, fully responsive web development, agile development
            practices, deployment
          </li>
          <li className="desktop-text-box-about__li">
            Photoshop, InDesign, Illustrator, Figma, QuarkXpress
          </li>
        </ul>
      </main>

      <div className="desktop-text-box-about__navigation"></div>
    </article>
  );
}
