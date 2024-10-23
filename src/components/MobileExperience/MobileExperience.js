import "./MobileExperience.scss";
import Collapsible from "react-collapsible";
import { useNavigate } from "react-router-dom";

export default function MobileExperience() {
  const navigate = useNavigate();
  const isExperiencePage = window.location.pathname.endsWith("/experience");

  const handleOpen = () => {
    navigate("/experience");
  };

  return (
    <article className="experience-mobile">
      <Collapsible
        trigger={
          <div role="heading" aria-level="2" id="experience-heading">
            EXPERiENCE
          </div>
        }
        open={isExperiencePage}
        onOpen={handleOpen}
      >
        <div className="experience-mobile__textbox">
          <h3 className="experience-mobile__header">JUNIOR WEB DEVELOPER</h3>
          <p className="experience-mobile__subheader">
            @ Freelance, London (UK)
          </p>
          <p className="experience-mobile__subheader  experience-mobile__subheader--bottom">
            Apr 2024 - Jun 2024
          </p>
          <ul className="experience-mobile__list">
            <li className="experience-mobile__list-item">
              Development start of a new cargo security web app including
              design, development of a React front end with a Node.js/Express
              server featuring a RESTful API, integration of Firebase and
              MongoDB databases, and integration of authorisation and
              roles/access permissions
            </li>
            <li className="experience-mobile__list-item">
              Designing the implementation of a new feature in the Naxxar app
            </li>
          </ul>
        </div>

        <div className="experience-mobile__textbox">
          <h3 className="experience-mobile__header">
            FAMILY SUPPORT WORKER AT HMP BRIXTON
          </h3>
          <p className="experience-mobile__subheader">
            @ Prison Advice and Care Trust, London (UK)
          </p>
          <p className="experience-mobile__subheader  experience-mobile__subheader--bottom">
            Jul 2021 - Aug 2023
          </p>
          <ul className="experience-mobile__list">
            <li className="experience-mobile__list-item">
              Built excellent communication skills by liaising with and between
              prisoners, prison officers, prison agencies, probation, police,
              social services, community services, GPs and prisoner's families
            </li>
            <li className="experience-mobile__list-item">
              Demonstrated flexibility, resilience and empathy working in a
              challenging and unpredictable environment
            </li>
            <li className="experience-mobile__list-item">
              Developed superb organisation skills by carrying a caseload of up
              to 50 service users at once
            </li>
          </ul>
        </div>

        <div className="experience-mobile__textbox">
          <h3 className="experience-mobile__header">GRAPHIC DESIGNER</h3>
          <p className="experience-mobile__subheader">freelance, London (UK)</p>
          <p className="experience-mobile__subheader  experience-mobile__subheader--bottom">
            Oct 2019 - Jul 2021, London (UK)
          </p>
          <ul className="experience-mobile__list">
            <li className="experience-mobile__list-item">
              Developed several brand identities from scratch, including logo,
              website and print material
            </li>
          </ul>
        </div>

        <div className="experience-mobile__textbox">
          <h3 className="experience-mobile__header">GRAPHIC DESIGNER</h3>
          <p className="experience-mobile__subheader">
            @ Good Company, London (UK)
          </p>
          <p className="experience-mobile__subheader  experience-mobile__subheader--bottom">
            Apr 2015 - Sep 2017, London (UK)
          </p>
          <ul className="experience-mobile__list">
            <li className="experience-mobile__list-item">
              Worked on a broad range of digital (newsletters, app development,
              websites) as well as print (books, tabloids, branding) projects
              for a variety of clients including luxury jewelers, personal
              clients and charities
            </li>
            <li className="experience-mobile__list-item">
              Ongoing collaboration with our developers to ensure good
              communication and flawless design outcomes
            </li>
          </ul>
        </div>

        <div className="experience-mobile__textbox">
          <h3 className="experience-mobile__header experience-mobile__header--extra">
            MORE...
          </h3>

          <ul className="experience-mobile__list">
            <li className="experience-mobile__list-item">
              For a full working history have a look at my{" "}
              <a
                className="experience-mobile__text-link"
                href="https://www.linkedin.com/in/leta-krahenbuhl/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li className="experience-mobile__list-item">
              If you're curious about my design projects check out my{" "}
              <a
                className="experience-mobile__text-link"
                href="https://www.behance.net/leta-krahenbuhl"
                target="_blank"
                rel="noreferrer"
              >
                Behance
              </a>
            </li>
          </ul>
        </div>
      </Collapsible>
    </article>
  );
}
