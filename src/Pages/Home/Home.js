import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";
import NavigationMobile from "../../components/NavigationMobile/NavigationMobile";
import "./Home.scss";

export default function Home() {
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
