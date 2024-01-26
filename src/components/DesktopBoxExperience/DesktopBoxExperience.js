import "./DesktopBoxExperience.scss";

export default function DesktopBoxExperience() {
  return (
    <>
      <article className="desktop-text-box">
        <main className="desktop-text-box__main">
          <h2 className="desktop-text-box__header">
            FAMILY SUPPORT WORKER AT HMP BRIXTON
          </h2>
          <p className="desktop-text-box__subheader">
            @ Prison Advice and Care Trust, London (UK)
          </p>
          <p className="desktop-text-box__subheader  desktop-text-box__subheader--bottom">
            Jul 2021 - Aug 2023
          </p>
          <ul className="desktop-text-box__list">
            <li className="desktop-text-box__list-item">
              Built excellent communication skills by liaising with and between
              prisoners, prison officers, prison agencies, probation, police,
              social services, community services, GPs and prisoner's families
            </li>
            <li className="desktop-text-box__list-item">
              Demonstrated flexibility, resilience and empathy working in a
              challenging and unpredictable environment
            </li>
            <li className="desktop-text-box__list-item">
              Developed superb organisation skills by carrying a caseload of up
              to 50 service users at once
            </li>
          </ul>

          <h2 className="desktop-text-box__header">GRAPHIC DESIGNER</h2>
          <p className="desktop-text-box__subheader">freelance, London (UK)</p>
          <p className="desktop-text-box__subheader  desktop-text-box__subheader--bottom">
            Oct 2019 - Jul 2021, London (UK)
          </p>
          <ul className="desktop-text-box__list">
            <li className="desktop-text-box__list-item">
              Developed several brand identities from scratch, including logo,
              website and print material
            </li>
          </ul>

          <h2 className="desktop-text-box__header">GRAPHIC DESIGNER</h2>
          <p className="desktop-text-box__subheader">
            @ Good Company, London (UK)
          </p>
          <p className="desktop-text-box__subheader  desktop-text-box__subheader--bottom">
            Apr 2015 - Sep 2017, London (UK)
          </p>
          <ul className="desktop-text-box__list">
            <li className="desktop-text-box__list-item">
              Worked on a broad range of digital (newsletters, app development,
              websites) as well as print (books, tabloids, branding) projects
              for a variety of clients including luxury jewelers, personal
              clients and charities
            </li>
            <li className="desktop-text-box__list-item">
              Ongoing collaboration with our developers to ensure good
              communication and flawless design outcomes
            </li>
          </ul>

          <h2 className="desktop-text-box__header desktop-text-box__header--extra">
            MORE...
          </h2>

          <ul className="desktop-text-box__list">
            <li className="desktop-text-box__list-item">
              For a full working history have a look at my{" "}
              <a
                className="desktop-text-box__text-link"
                href="https://www.linkedin.com/in/leta-krahenbuhl/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li className="desktop-text-box__list-item">
              If you're curious about my design projects check out my{" "}
              <a
                className="desktop-text-box__text-link"
                href="https://www.behance.net/leta-krahenbuhl"
                target="_blank"
                rel="noreferrer"
              >
                Behance
              </a>
            </li>
          </ul>
        </main>
      </article>
    </>
  );
}
