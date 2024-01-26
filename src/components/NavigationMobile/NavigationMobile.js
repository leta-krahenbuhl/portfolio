import "./NavigationMobile.scss";
import MobileAbout from "../../components/MobileAbout/MobileAbout";
import MobileProjects from "../../components/MobileProjects/MobileProjects";
import MobileEducation from "../../components/MobileEducation/MobileEducation";
import MobileExperience from "../../components/MobileExperience/MobileExperience";
import MobileAboutOpen from "../MobileAboutOpen/MobileAboutOpen";
import { useLocation } from "react-router-dom";
// import MobileProjectsOpen from "../MobileProjectsOpen/MobileProjectsOpen";

export default function NavigationMobile() {
  const location = useLocation();

  //delete?
  // const currentLocation = location.pathname;

  return (
    <nav className="nav-mobile">
      {(location.pathname === "/" ||
        location.pathname === "/projects" ||
        location.pathname === "/education" ||
        location.pathname === "/experience") && <MobileAbout />}
      {location.pathname === "/about2" && <MobileAboutOpen />}
      <p className="nav-mobile__caret1">^^^^^^^^^^</p>
      <MobileProjects />

      <p className="nav-mobile__caret2">^^^^^^^^^^</p>
      <MobileEducation />
      <p className="nav-mobile__caret3">^^^^^^^^^^</p>
      <MobileExperience />
      <p className="nav-mobile__caret4">^^^^^^^^^^</p>
    </nav>
  );
}
