import "./MobileAbout.scss";
import Collapsible from "react-collapsible";

export default function MobileAbout() {
  return (
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
            After exploring the social sector and developing my soft and problem
            solving skills, I am going back to my roots - the tech industry.
            Coming originally from a graphic design background and now mastering
            the technical side gives me a unique understanding of the
            development process.
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
  );
}
