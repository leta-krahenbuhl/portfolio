import "./MobileEducation.scss";
import Collapsible from "react-collapsible";

export default function MobileEducation() {
  return (
    <article className="education-mobile">
      <Collapsible trigger="EDUCATiON">
        <div className="education-mobile__textbox">
          <h2 className="education-mobile__text">
            Software Engineering Diploma Graduate
          </h2>
          <p className="education-mobile___text">@ BrainStation, London (UK)</p>
          <p className="education-mobile___text">Sep 2023 - Dec 2023</p>
          {/* change class names */}
          <ul className="projects-mobile__list">
            <li className="projects-mobile__list-item">Passing grade 92%</li>
            <li className="projects-mobile__list-item">
              HTML, BEM, CSS, SASS, JavaScript, React JS, JSX
            </li>
            <li className="projects-mobile__list-item">
              Node/Express, mySQL, Knex, REST APIs
            </li>
            <li className="projects-mobile__list-item">
              Best practices, GitHub version control, Agile developing, pair
              programming, scrums, deployment
            </li>
          </ul>
        </div>
        <div className="education-mobile__textbox">
          <h2 className="education-mobile__text">
            Bacherlor's Degree in InterMedia
          </h2>
          <p className="education-mobile___text">
            @ University of Applied Sciences, Dornbirn (AUT)
          </p>
          <p className="education-mobile___text">Aug 2008 - Aug 2011</p>
          {/* change class names */}
          <ul className="projects-mobile__list">
            <li className="projects-mobile__list-item">
              Subjects included programming, design, photography, psychology,
              typography
            </li>
          </ul>
        </div>
      </Collapsible>
    </article>
  );
}
