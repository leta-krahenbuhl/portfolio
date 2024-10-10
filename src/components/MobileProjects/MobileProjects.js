import "./MobileProjects.scss";
import Collapsible from "react-collapsible";
import nbHome from "../../assets/images/home.png";
import nbNotebook from "../../assets/images/notebook.png";
import nbData from "../../assets/images/data.png";
import fccScreenshot from "../../assets/images/fcc-screenshot.png";
import ddScreenshot1 from "../../assets/images/dd-home.png";
import ddScreenshot2 from "../../assets/images/dd-tasks.png";
import ddScreenshot3 from "../../assets/images/dd-stats.png";

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
          <h3 className="projects-mobile__text-header-h3">DONE & DUSTED</h3>

          <h4 className="projects-mobile__text-header">Check It Out</h4>
          <ul className="projects-mobile__list">
            <li className="projects-mobile__list-item">
              <a
                className="projects-mobile__link"
                href="https://done-and-dusted-production.up.railway.app/"
                target="_blank"
                rel="noreferrer"
              >
                Live page
              </a>
            </li>
            <li className="projects-mobile__list-item">
              <a
                className="projects-mobile__link"
                href="https://github.com/leta-krahenbuhl/done-and-dusted"
                target="_blank"
                rel="noreferrer"
              >
                GitHub repo (front-end)
              </a>
            </li>
            <li className="projects-mobile__list-item">
              <a
                className="projects-mobile__link"
                href="https://github.com/leta-krahenbuhl/done-and-dusted-server"
                target="_blank"
                rel="noreferrer"
              >
                GitHub repo (back-end)
              </a>
            </li>
          </ul>

          <h4 className="projects-mobile__text-header">General</h4>
          <ul className="projects-mobile__list">
            <li className="projects-mobile__list-item">
              A web app that turns chores into a competition. Add tasks,
              complete them, and get weekly stats of who completed how much
              housework! Sign up and have a play around :)...
            </li>
          </ul>

          <h4 className="projects-mobile__text-header">Tech Stack</h4>
          <ul className="projects-mobile__list">
            <li className="projects-mobile__list-item">
              React front-end, Noje.js/Express back-end, MongoDB Atlas database{" "}
            </li>
            <li className="projects-mobile__list-item">
              Authorisation (sign up and login)
            </li>
            <li className="projects-mobile__list-item">
              {" "}
              Data visualisation with @mui/x-charts
            </li>
            <li className="projects-mobile__list-item">
              Desktop only! To have a look at my responsive design skills check
              out mobile/tablet/desktop version of this portfolio
            </li>
          </ul>

          <h4 className="projects-mobile__text-header">Screenshots</h4>
          <div className="projects-mobile__screenshot-container">
            <img
              src={ddScreenshot1}
              alt="screenshot of notebook app home"
              className="projects-mobile__image projects-mobile__image--wide"
            />
          </div>
          <div>
            <img
              src={ddScreenshot2}
              alt="screenshot of notebook app notebook page"
              className="projects-mobile__image projects-mobile__image--wide"
            />
          </div>
          <div>
            <img
              src={ddScreenshot3}
              alt="screenshot of database structure"
              className="projects-mobile__image projects-mobile__image--wide"
            />
          </div>
        </div>

        <div className="projects-mobile__textbox">
          <h3 className="projects-mobile__text-header-h3">NOTEBOOKS</h3>

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
            <li className="projects-mobile__list-item">
              Form validation on front and back end
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
              <a
                className="projects-mobile__link"
                href="https://lk-fcc-projects.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Live page
              </a>
            </li>
            <li className="projects-mobile__list-item">
              Collection of projects I've completed on freecodecamp.com
            </li>
            <li className="projects-mobile__list-item">
              HTML/CSS and JavaScript (desktop only for now!)
            </li>
            <li className="projects-mobile__list-item">
              <a
                className="projects-mobile__link"
                href="https://www.freecodecamp.org/leta-krahenbuhl"
                target="_blank"
                rel="noreferrer"
              >
                FreeCodeCamp profile
              </a>
              , including current coding streak!
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
          <div className="projects-mobile__screenshot-container">
            <a
              href="https://lk-fcc-projects.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={fccScreenshot}
                alt="screenshot of notebook app home"
                className="projects-mobile__image projects-mobile__image--wide"
              />
            </a>
          </div>
        </div>
      </Collapsible>
    </article>
  );
}
