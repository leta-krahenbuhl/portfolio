import "./DesktopBoxProjects.scss";
import nbHome from "../../assets/images/home.png";
import nbNotebook from "../../assets/images/notebook.png";
import nbData from "../../assets/images/data.png";

export default function DesktopBoxProjects() {
  return (
    <>
      <article className="desktop-text-box-new">
        <main className="desktop-text-box-new__main">
          <section className="desktop-text-box-new__section">
            <h3 className="desktop-text-box-new__header">NOTEBOOKS</h3>
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
            </ul>

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
                Website with projects I've completed on{" "}
                <a
                  className="desktop-text-box-new__text-link"
                  href="https://www.freecodecamp.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  freecodecamp.com
                </a>
              </li>

              <li className="desktop-text-box-new__list-item">
                Desktop only for now!
              </li>

              <li className="desktop-text-box-new__list-item">
                Check them out{" "}
                <a
                  className="desktop-text-box-new__text-link"
                  href="https://lk-fcc-projects.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  here
                </a>
              </li>

              <li className="desktop-text-box-new__list-item">
                My FreeCodeCamp{" "}
                <a
                  className="desktop-text-box-new__text-link"
                  href="https://www.freecodecamp.org/leta-krahenbuhl"
                  target="_blank"
                  rel="noreferrer"
                >
                  profile
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
          </section>
        </main>

        <div className="desktop-text-box__navigation"></div>
      </article>
    </>
  );
}
