import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";
import NavigationMobile from "../../components/NavigationMobile/NavigationMobile";
import "./About2.scss";

export default function About2() {
  return (
    <main className="home">
      <Header />
      <div className="navigation-tablet">
        <Navigation />
      </div>
      <div className="navigation-mobile">
        <NavigationMobile />
      </div>
    </main>
  );
}
