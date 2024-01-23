import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";
import "./Home.scss";

export default function Home() {
  return (
    <article className="home">
      <Header />
      <Navigation />
      <main className="main"></main>
    </article>
  );
}
