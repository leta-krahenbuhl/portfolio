import "./DesktopBoxProjects.scss";
import nbHome from "../../assets/images/home.png";
import nbNotebook from "../../assets/images/notebook.png";
import nbData from "../../assets/images/data.png";
import fccScreenshot from "../../assets/images/fcc-screenshot.png";
import ddScreenshot1 from "../../assets/images/dd-home.png";
import ddScreenshot2 from "../../assets/images/dd-tasks.png";
import ddScreenshot3 from "../../assets/images/dd-stats.png";

export default function DesktopBoxProjects() {
  return (
    <>
      <article className="desktop-text-box-new">
        <main className="desktop-text-box-new__main">
          <section className="desktop-text-box-new__section">
            <h3 className="desktop-text-box-new__header">DONE & DUSTED</h3>
            <h4 className="desktop-text-box-new__header">Check It Out</h4>

            <ul className="desktop-text-box-new__list">
              <li className="desktop-text-box-new__list-item">
                <a
                  className="desktop-text-box-new__text-link"
                  href="https://done-and-dusted-production.up.railway.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live page
                </a>
              </li>
              <li className="desktop-text-box-new__list-item">
                <a
                  className="desktop-text-box-new__text-link"
                  href="https://github.com/leta-krahenbuhl/done-and-dusted"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub repo (front-end)
                </a>
              </li>
              <li className="desktop-text-box-new__list-item">
                <a
                  className="desktop-text-box-new__text-link"
                  href="https://github.com/leta-krahenbuhl/done-and-dusted-server"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub repo (back-end)
                </a>
              </li>
            </ul>

            <h4 className="desktop-text-box-new__header">General</h4>
            <ul>
              <li className="desktop-text-box-new__list-item">
                A web app that turns chores into a competition. Add tasks,
                complete them, and get weekly stats of who completed how much
                housework! Sign up and have a play around :)...
              </li>
            </ul>

            <h4 className="desktop-text-box-new__header">Tech Stack</h4>
            <ul>
              <li className="desktop-text-box-new__list-item">
                React front-end, Node.js/Express back-end, MongoDB Atlas
                database
              </li>
              <li className="desktop-text-box-new__list-item">
                Authorisation (sign up and login)
              </li>
              <li className="desktop-text-box-new__list-item">
                Data visualisation with @mui/x-charts
              </li>
              <li className="desktop-text-box-new__list-item">
                Desktop only! To have a look at my responsive design skills
                check out mobile/tablet/desktop version of this portfolio
              </li>
            </ul>

            <h4 className="desktop-text-box-new__header">Screenshots</h4>
            <div className="desktop-text-box-new__screenshot-container">
              <a
                href="https://done-and-dusted-production.up.railway.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={ddScreenshot1}
                  alt="screenshot1 of done & dusted website"
                  className="desktop-text-box-new__image desktop-text-box-new__image--wide"
                />
              </a>
            </div>
            <div>
              <a
                href="https://done-and-dusted-production.up.railway.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={ddScreenshot2}
                  alt="screenshot2 of done & dusted website"
                  className="desktop-text-box-new__image desktop-text-box-new__image--wide"
                />
              </a>
            </div>
            <div>
              <a
                href="https://done-and-dusted-production.up.railway.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={ddScreenshot3}
                  alt="screenshot3 of done & dusted website"
                  className="desktop-text-box-new__image desktop-text-box-new__image--wide"
                />
              </a>
            </div>
          </section>

          <section className="desktop-text-box-new__section">
            <h3 className="desktop-text-box-new__header">NOTEBOOKS</h3>

            <h4 className="desktop-text-box-new__header">Check It Out</h4>
            <ul className="desktop-text-box-new__list">
              <li className="desktop-text-box-new__list-item">
                <a
                  className="desktop-text-box-new__text-link"
                  href="https://lk-notebooks.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live page
                </a>
              </li>
              <li className="desktop-text-box-new__list-item">
                <a
                  className="desktop-text-box-new__text-link"
                  href="https://github.com/leta-krahenbuhl/notebooks"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub repo
                </a>
              </li>
            </ul>

            <h4 className="desktop-text-box-new__header">General</h4>
            <ul className="desktop-text-box-new__list">
              <li className="desktop-text-box-new__list-item">
                Capstone project from the BrainStation software engineering
                bootcamp to showcase front and back-end skills acquired
              </li>
            </ul>
            <h4 className="desktop-text-box-new__header">Tech Stack</h4>
            <ul className="desktop-text-box-new__list">
              <li className="desktop-text-box-new__list-item">
                HTML/BEM, CSS/SASS, JavaScript/JSX, React JS, Node/Express
                server
              </li>
              <li className="desktop-text-box-new__list-item">
                Use of MySQL database with Knex.js
              </li>
              <li className="desktop-text-box-new__list-item">
                Three API endpoints
              </li>
              <li className="desktop-text-box-new__list-item">
                Form validation on front and back end
              </li>
            </ul>

            <h4 className="desktop-text-box-new__header">Screenshots</h4>
            <div className="desktop-text-box-new__screenshot-container">
              <img
                src={nbHome}
                alt="screenshot of notebook app home"
                className="desktop-text-box-new__image"
              />
              <img
                src={nbNotebook}
                alt="screenshot of notebook app notebook page"
                className="desktop-text-box-new__image"
              />
            </div>
            <img
              src={nbData}
              alt="screenshot of database structure"
              className="desktop-text-box-new__image desktop-text-box-new__image--wide"
            />
          </section>

          <section className="desktop-text-box-new__section">
            <h3 className="desktop-text-box-new__header">THIS PORTFOLIO</h3>
            <ul className="desktop-text-box-new__list">
              <li className="desktop-text-box-new__list-item">
                React app with HTML/BEM, CSS/SASS and Javascript
              </li>
              <li className="desktop-text-box-new__list-item">
                Use of: states for conditional rendering, subtle CSS keyframe
                animations, npm libraries and their properties
              </li>
              <li className="desktop-text-box-new__list-item">
                Fully responsive
              </li>
              <li className="desktop-text-box-new__list-item">
                Timeframe: 5 days
              </li>
              <li className="desktop-text-box-new__list-item">
                <a
                  className="desktop-text-box-new__text-link"
                  href="https://github.com/leta-krahenbuhl/portfolio"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub repo
                </a>
              </li>
            </ul>
          </section>

          <section className="desktop-text-box-new__section">
            <h3 className="desktop-text-box-new__header">
              FREECODECAMP.COM PROJECTS
            </h3>
            <ul className="desktop-text-box-new__list">
              <li className="desktop-text-box-new__list-item">
                <a
                  className="desktop-text-box-new__text-link"
                  href="https://lk-fcc-projects.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live page
                </a>
              </li>
              <li className="desktop-text-box-new__list-item">
                Collection of projects I've completed on freecodecamp.com
              </li>
              <li className="desktop-text-box-new__list-item">
                HTML/CSS and JavaScript (desktop only for now!)
              </li>
              <li className="desktop-text-box-new__list-item">
                <a
                  className="desktop-text-box-new__text-link"
                  href="https://www.freecodecamp.org/leta-krahenbuhl"
                  target="_blank"
                  rel="noreferrer"
                >
                  FreeCodeCamp profile
                </a>
              </li>
              <li className="desktop-text-box-new__list-item">
                <a
                  className="desktop-text-box-new__text-link"
                  href="https://github.com/leta-krahenbuhl/fcc-projects"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub repo
                </a>
              </li>
            </ul>
            <div className="desktop-text-box-new__screenshot-container">
              <a
                href="https://lk-fcc-projects.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={fccScreenshot}
                  alt="screenshot of freecodecamp projects website"
                  className="desktop-text-box-new__image desktop-text-box-new__image--wide"
                />
              </a>
            </div>
          </section>
        </main>

        <div className="desktop-text-box__navigation"></div>
      </article>
    </>
  );
}
