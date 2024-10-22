import "./DesktopBoxAbout.scss";

export default function DesktopBoxAbout() {
  return (
    <article className="desktop-text-box-about">
      <main className="desktop-text-box-about__main">
        <p className="desktop-text-box-about__text">Hi! 👩‍💻</p>

        <p className="desktop-text-box-about__text">
          I am Leta. After exploring the social sector and honing my soft and
          problem solving skills, I am going back to my roots - the tech
          industry.
        </p>

        <p className="desktop-text-box-about__text">
          Last year I graduated with a diploma in Software Engineering,
          finishing with a 92% grade. Since then I've worked a temporary
          contract for a geotech start-up, where I designed and developed a
          cargo security app. Currently, I am working on personal projects;
          check out the project section to learn more about them.
        </p>

        <p className="desktop-text-box-about__text">
          I love creating, ticking off lists, and playing code detective
          following a trail of error messages whilst listening to my coding
          playlist. Coming originally from a graphic design background and now
          mastering the technical side of creating gives me a unique
          understanding of the development process.
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
            HTML (with BEM), CSS and SASS, JavaScript, React, TypeScript
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
            Learning next: Python and React Native
          </li>
        </ul>
      </main>

      <div className="desktop-text-box-about__navigation"></div>
    </article>
  );
}
