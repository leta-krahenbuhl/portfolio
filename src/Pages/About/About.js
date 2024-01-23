import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";
import "./About.scss";

export default function About() {
  return (
    <article className="about">
      <Header />
      <article className="about__container">
        <main className="about__main">
          <p className="about__text">Hi! </p>

          <p className="about__text">
            I am Leta, a recent software engineering diploma graduate. I love
            things that make sense, ticking of lists, and playing code detective
            following a lovely trail of error messages.
          </p>

          <p className="about__text">
            After indulging in my passion of trying to make a difference and
            exploring the social sector whilst developing my soft and problem
            solving skills, I am going back to my roots - the tech industry.
            Coming originally from a graphic design background and now mastering
            the technical side gives me a unique understanding of different
            sides of the development process.
          </p>
          <p className="about__text">
            Do get in touch or check out my socials!
          </p>

          <p>LinkedIn </p>

          <p> GitHub</p>
        </main>

        <div className="about__navigation">
          <Navigation />
        </div>
      </article>
    </article>
  );
}
