import "./DesktopBoxEducation.scss";

export default function DesktopBoxEducation() {
  return (
    <>
      <article className="desktop-text-box-new">
        <main className="desktop-text-box-new__main">
          <section className="desktop-text-box-new__section">
            <h3 className="desktop-text-box-new__header desktop-text-box-new__header--nospaceafter">
              DIPLOMA IN SOFTWARE ENGINEERING
            </h3>
            <p className="desktop-text-box-new__subheader">
              @ BrainStation, London (UK)
            </p>
            <p className="desktop-text-box-new__subheader  desktop-text-box-new__subheader--bottom">
              Sep 2023 - Dec 2023
            </p>
            <ul className="desktop-text-box-new__list">
              <li className="desktop-text-box-new__list-item">
                Passing grade 92%
              </li>
              <li className="desktop-text-box-new__list-item">
                HTML, BEM, CSS, SASS, JavaScript, React JS, JSX
              </li>
              <li className="desktop-text-box-new__list-item">
                Node/Express, mySQL, Knex, REST APIs
              </li>
              <li className="desktop-text-box-new__list-item">
                Best practices, GitHub version control, Agile developing, pair
                programming, scrums, deployment
              </li>
            </ul>
          </section>

          <section className="desktop-text-box-new__section">
            <h3 className="desktop-text-box-new__header desktop-text-box-new__header--nospaceafter">
              BACHELOR'S DEGREE IN INTERMEDIA
            </h3>
            <p className="desktop-text-box-new__subheader">
              @ University of Applied Sciences, Dornbirn (AUT)
            </p>
            <p className="desktop-text-box-new__subheader desktop-text-box-new__subheader--bottom">
              Aug 2008 - Aug 2011
            </p>
            <ul className="desktop-text-box-new__list">
              <li className="desktop-text-box-new__list-item">
                Subjects included media technology & informatics, design,
                photography, psychology, typography, marketing, video production
              </li>
              <li className="desktop-text-box-new__list-item">
                180 ECTS credits / grade of 2.24 (equivalent to a UK 2:1
                bachelor's degree)
              </li>
            </ul>
          </section>
        </main>
      </article>
    </>
  );
}
