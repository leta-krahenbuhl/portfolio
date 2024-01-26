import "./MobileEducation.scss";
import Collapsible from "react-collapsible";
import { useNavigate } from "react-router-dom";

export default function MobileEducation() {
  const navigate = useNavigate();
  const isEducationPage = window.location.pathname.endsWith("/education");

  const handleOpen = () => {
    navigate("/education");
  };

  return (
    <article className="education-mobile">
      <Collapsible
        trigger={
          <div role="heading" aria-level="2" id="education-heading">
            EDUCATiON
          </div>
        }
        open={isEducationPage}
        onOpen={handleOpen}
      >
        <div className="education-mobile__textbox">
          <h3 className="education-mobile__header">
            DIPLOMA IN SOFTWARE ENGINEERING
          </h3>
          <p className="education-mobile__subheader">
            @ BrainStation, London (UK)
          </p>
          <p className="education-mobile__subheader  education-mobile__subheader--bottom">
            Sep 2023 - Dec 2023
          </p>
          <ul className="education-mobile__list">
            <li className="education-mobile__list-item">Passing grade 92%</li>
            <li className="education-mobile__list-item">
              HTML, BEM, CSS, SASS, JavaScript, React JS, JSX
            </li>
            <li className="education-mobile__list-item">
              Node/Express, mySQL, Knex, REST APIs
            </li>
            <li className="education-mobile__list-item">
              Best practices, GitHub version control, Agile developing, pair
              programming, scrums, deployment
            </li>
          </ul>
        </div>
        <div className="education-mobile__textbox">
          <h3 className="education-mobile__header">
            BACHELOR'S DEGREE IN INTERMEDIA
          </h3>
          <p className="education-mobile__subheader">
            @ University of Applied Sciences, Dornbirn (AUT)
          </p>
          <p className="education-mobile__subheader education-mobile__subheader--bottom">
            Aug 2008 - Aug 2011
          </p>
          <ul className="education-mobile__list">
            <li className="education-mobile__list-item">
              Subjects included programming, graphic design, photography,
              psychology, typography, videography, post production
            </li>
          </ul>
        </div>
      </Collapsible>
    </article>
  );
}
