import "./DesktopBoxEducation.scss";

export default function DesktopBoxEducation() {
  return (
    <>
      <article className="desktop-text-box">
        <main className="desktop-text-box__main">
          <h2 className="desktop-text-box__header">
            DIPLOMA IN SOFTWARE ENGINEERING
          </h2>
          <p className="desktop-text-box__subheader">
            @ BrainStation, London (UK)
          </p>
          <p className="desktop-text-box__subheader  desktop-text-box__subheader--bottom">
            Sep 2023 - Dec 2023
          </p>
          <ul className="desktop-text-box__list">
            <li className="desktop-text-box__list-item">Passing grade 92%</li>
            <li className="desktop-text-box__list-item">
              HTML, BEM, CSS, SASS, JavaScript, React JS, JSX
            </li>
            <li className="desktop-text-box__list-item">
              Node/Express, mySQL, Knex, REST APIs
            </li>
            <li className="desktop-text-box__list-item">
              Best practices, GitHub version control, Agile developing, pair
              programming, scrums, deployment
            </li>
          </ul>

          <h2 className="desktop-text-box__header">
            BACHELOR'S DEGREE IN INTERMEDIA
          </h2>
          <p className="desktop-text-box__subheader">
            @ University of Applied Sciences, Dornbirn (AUT)
          </p>
          <p className="desktop-text-box__subheader desktop-text-box__subheader--bottom">
            Aug 2008 - Aug 2011
          </p>
          <ul className="desktop-text-box__list">
            <li className="desktop-text-box__list-item">
              Subjects included programming, graphic design, photography,
              psychology, typography, videography, post production
            </li>
          </ul>
        </main>

        {/* <div className="desktop-text-box__navigation"></div> */}
      </article>
    </>
  );
}
