import "./Experience.scss";
import Header from "../../components/Header/Header";
import HeaderSub from "../../components/HeaderSub/HeaderSub";
import Navigation from "../../components/Navigation/Navigation";
import NavigationMobile from "../../components/NavigationMobile/NavigationMobile";
import React, { useEffect, useState } from "react";
import DesktopBoxExperience from "../../components/DesktopBoxExperience/DesktopBoxExperience";

export default function Experience() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsVisible(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <article className="experience">
      <Header />
      {isVisible && <HeaderSub />}
      <div className="desktop-text-box-wrapper">
        <DesktopBoxExperience />
      </div>
      <div className="navigation-tablet">
        <Navigation />
      </div>
      <div className="navigation-mobile">
        <NavigationMobile />
      </div>
    </article>
  );
}
