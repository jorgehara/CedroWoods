import "./App.css";
import { Carousel } from "./Components/Carousel/Carousel";
import { Galery } from "./Components/Galeria/Galery";
import { Header } from "./Components/Header/Header";
import { MyPage } from "./Components/MyPage/MyPage";
import { Projects } from "./Components/Projects/Projects";

export default function App() {
  return (
    <>
      <Header />
      {/* <Carousel/> */}
      <Galery />
      <Projects />
      <hr />
      <br />
      <br />
    </>
  );
}
