import DesktopTextBox from "../../components/DesktopTextBox/DesktopTextBox";
import Header from "../../components/Header/Header";
import HeaderSub from "../../components/HeaderSub/HeaderSub";
import Navigation from "../../components/Navigation/Navigation";
import NavigationMobile from "../../components/NavigationMobile/NavigationMobile";
import "./About2.scss";
import React, { useEffect, useState } from "react";

export default function About2() {
  const [isVisible, setIsVisible] = useState(true);

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
    <main className="home">
      <Header />
      {isVisible && <HeaderSub />}
      <div className="desktop-text-box-wrapper">
        <DesktopTextBox />
      </div>
      <div className="navigation-tablet">
        <Navigation />
      </div>
      <div className="navigation-mobile">
        <NavigationMobile />
      </div>
    </main>
  );
}
