import "./HeaderSub.scss";
import React, { useEffect, useState } from "react";

export default function HeaderSub() {
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

  return isVisible ? (
    <article className="header-part2">
      <p className="header-part2__junior">JUNiOR</p>
      <p className="header-part2__software">SOFTWARE</p>
      <p className="header-part2__engineer">ENGiNEER</p>
      <p className="header-part2__caret2">^^^^^^^^^^</p>
      <p className="header-part2__london">LONDON</p>
      <p className="header-part2__caret3">^^^^^^^^^^</p>
    </article>
  ) : null;
}
