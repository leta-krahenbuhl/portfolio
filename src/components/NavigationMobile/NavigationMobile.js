import "./NavigationMobile.scss";
import MobileAbout from "../../components/MobileAbout/MobileAbout";
import MobileProjects from "../../components/MobileProjects/MobileProjects";
import MobileEducation from "../../components/MobileEducation/MobileEducation";
import MobileExperience from "../../components/MobileExperience/MobileExperience";

export default function NavigationMobile() {
  return (
    <nav className="nav-mobile">
      <MobileAbout />
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
