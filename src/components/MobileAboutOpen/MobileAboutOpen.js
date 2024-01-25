import "./MobileAboutOpen.scss";
import Collapsible from "react-collapsible";

export default function MobileAboutOpen() {
  return (
    <article className="about-mobile">
      <Collapsible trigger="ABOUT" open={true}>
        <div className="about-mobile__textbox">
          <p className="about-mobile__text">Hi! &#9996;</p>
          <p className="about-mobile__text">
            I am Leta, a recent software engineering diploma graduate. I love
            things that make sense, ticking off lists, and playing code
            detective following a lovely trail of error messages.
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
            {" "}
            &#x1F4E7;{" "}
            <a
              className="about-mobile__text-link about-mobile__text-link--extra"
              href="mailto:leta.krahenbuhl@gmail.com"
            >
              Send me an email
            </a>
          </p>
        </div>
      </Collapsible>
    </article>
  );
}
