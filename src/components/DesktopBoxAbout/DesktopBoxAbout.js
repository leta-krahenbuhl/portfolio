import "./DesktopBoxAbout.scss";

export default function DesktopBoxAbout() {
  return (
    <article className="desktop-text-box-about">
      <main className="desktop-text-box-about__main">
        <p className="desktop-text-box-about__text">Hi! &#9996;</p>

        <p className="desktop-text-box-about__text">
          I am Leta, a recent software engineering diploma graduate. I love
          creating, ticking off lists, and playing code detective following a
          trail of error messages whilst listening to my coding playlist on
          repeat.
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

        <p className="desktop-text-box-about__text">
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
        </p>

        <p className="desktop-text-box-about__text">
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
        </p>

        <p className="desktop-text-box-about__text">
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
        </p>
      </main>

      <div className="desktop-text-box-about__navigation"></div>
    </article>
  );
}
