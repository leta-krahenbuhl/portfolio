import "./MobileProjects.scss";
import Collapsible from "react-collapsible";
import nbHome from "../../assets/images/home.png";
import nbNotebook from "../../assets/images/notebook.png";
import nbData from "../../assets/images/data.png";
import { useNavigate } from "react-router-dom";

export default function MobileProjects() {
  const isProjectsPage = window.location.pathname.endsWith("/projects");
  const navigate = useNavigate();

  const handleOpen = () => {
    navigate("/projects");
  };

  return (
    <article className="projects-mobile">
      <Collapsible trigger="PROJECTS" open={isProjectsPage} onOpen={handleOpen}>
        <div className="projects-mobile__textbox">
          <p className="projects-mobile__text-header">NOTEBOOKS</p>
          <p className="projects-mobile__text-header">General</p>
          <ul className="projects-mobile__list">
            <li className="projects-mobile__list-item">
              Capstone project from the BrainStation software engineering
              bootcamp to showcase front and back-end skills acquired
            </li>
          </ul>
          <p className="projects-mobile__text-header">Tech Stack</p>
          <ul className="projects-mobile__list">
            <li className="projects-mobile__list-item">
              HTML/BEM, CSS/SASS, JavaScript/JSX, React JS, Node/Express server
            </li>
            <li className="projects-mobile__list-item">
              Use of MySQL database with Knex.js
            </li>
            <li className="projects-mobile__list-item">Three API endpoints</li>
          </ul>
          <p className="projects-mobile__text-header">Check It Out</p>
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
          <p className="projects-mobile__text-header">Screenshots</p>
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
          <p className="projects-mobile__text-header">THIS PORTFOLIO</p>
          <p className="projects-mobile__text-header">Tech Stack</p>
          <ul className="projects-mobile__list">
            <li className="projects-mobile__list-item">
              React app with HTML/BEM, CSS/SASS and Javascript
            </li>
            <li className="projects-mobile__list-item">
              Version control with GitHub
            </li>
            <li className="projects-mobile__list-item">
              Timeframe (including design): 4 days
            </li>
          </ul>
          <p className="projects-mobile__text-header">More</p>
          <ul className="projects-mobile__list">
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
      </Collapsible>
    </article>
  );
}
