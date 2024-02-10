import "./MobileProjects.scss";
import Collapsible from "react-collapsible";
import nbHome from "../../assets/images/home.png";
import nbNotebook from "../../assets/images/notebook.png";
import nbData from "../../assets/images/data.png";
import { useNavigate } from "react-router-dom";

export default function MobileProjects() {
  const navigate = useNavigate();
  const isProjectsPage = window.location.pathname.endsWith("/projects");

  const handleOpen = () => {
    navigate("/projects");
  };

  return (
    <article className="projects-mobile">
      <Collapsible
        trigger={
          <div role="heading" aria-level="2" id="projects-heading">
            PROJECTS
          </div>
        }
        open={isProjectsPage}
        onOpen={handleOpen}
      >
        <div className="projects-mobile__textbox">
          <h3 className="projects-mobile__text-header-h3">NOTEBOOKS</h3>
          <h4 className="projects-mobile__text-header">General</h4>
          <ul className="projects-mobile__list">
            <li className="projects-mobile__list-item">
              Capstone project from the BrainStation software engineering
              bootcamp to showcase front and back-end skills acquired
            </li>
          </ul>
          <h4 className="projects-mobile__text-header">Tech Stack</h4>
          <ul className="projects-mobile__list">
            <li className="projects-mobile__list-item">
              HTML/BEM, CSS/SASS, JavaScript/JSX, React JS, Node/Express server
            </li>
            <li className="projects-mobile__list-item">
              Use of MySQL database with Knex.js
            </li>
            <li className="projects-mobile__list-item">Three API endpoints</li>
          </ul>
          <h4 className="projects-mobile__text-header">Check It Out</h4>
          <ul className="projects-mobile__list">
            <li className="projects-mobile__list-item">
              <a
                className="projects-mobile__link"
                href="https://lk-notebooks.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Live page
              </a>
            </li>
            <li className="projects-mobile__list-item">
              <a
                className="projects-mobile__link"
                href="https://github.com/leta-krahenbuhl/notebooks"
                target="_blank"
                rel="noreferrer"
              >
                GitHub repo
              </a>
            </li>
          </ul>
          <h4 className="projects-mobile__text-header">Screenshots</h4>
          <div className="projects-mobile__screenshot-container">
            <img
              src={nbHome}
              alt="screenshot of notebook app home"
              className="projects-mobile__image"
            />
            <img
              src={nbNotebook}
              alt="screenshot of notebook app notebook page"
              className="projects-mobile__image"
            />
          </div>
          <img
            src={nbData}
            alt="screenshot of database structure"
            className="projects-mobile__image projects-mobile__image--wide"
          />
        </div>
        <div className="projects-mobile__textbox">
          <h3 className="projects-mobile__text-header-h3">THIS PORTFOLIO</h3>
          <ul className="projects-mobile__list">
            <li className="projects-mobile__list-item">
              React app with HTML/BEM, CSS/SASS and Javascript/JSX
            </li>
            <li className="projects-mobile__list-item">
              Use of: states for conditional rendering, subtle CSS keyframe
              animations, npm libraries and their properties
            </li>
            <li className="projects-mobile__list-item">Fully responsive</li>
            <li className="projects-mobile__list-item">Timeframe: 5 days</li>
            <li className="projects-mobile__list-item">
              <a
                className="projects-mobile__link"
                href="https://github.com/leta-krahenbuhl/portfolio"
                target="_blank"
                rel="noreferrer"
              >
                GitHub repo
              </a>
            </li>
          </ul>
        </div>

        <div className="projects-mobile__textbox">
          <h3 className="projects-mobile__text-header-h3">
            FREECODECAMP.COM PROJECTS
          </h3>
          <ul className="projects-mobile__list">
            <li className="projects-mobile__list-item">
              Website with projects I've completed on{" "}
              <a
                className="projects-mobile__link"
                href="https://www.freecodecamp.com"
                target="_blank"
                rel="noreferrer"
              >
                freecodecamp.com
              </a>
            </li>

            <li className="projects-mobile__list-item">
              Desktop only for now!
            </li>

            <li className="projects-mobile__list-item">
              Check them out{" "}
              <a
                className="projects-mobile__link"
                href="https://lk-fcc-projects.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                here
              </a>
            </li>
            <li className="projects-mobile__list-item">
              My FreeCodeCamp{" "}
              <a
                className="projects-mobile__link"
                href="https://www.freecodecamp.org/leta-krahenbuhl"
                target="_blank"
                rel="noreferrer"
              >
                profile
              </a>
            </li>

            <li className="projects-mobile__list-item">
              <a
                className="projects-mobile__link"
                href="https://github.com/leta-krahenbuhl/fcc-projects"
                target="_blank"
                rel="noreferrer"
              >
                GitHub repo
              </a>
            </li>
          </ul>
        </div>
      </Collapsible>
    </article>
  );
}
