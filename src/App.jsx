import "./App.css";
import { BeforeHeader } from "./Components/BeforeHeader/BeforeHeader";
import { CardsPrueba } from "./Components/Cards/CardsPrueba";
import { Footer } from "./Components/Footer/Footer";
import { Galery } from "./Components/Galeria/Galery";
import { Header } from "./Components/Header/Header";
import { Projects } from "./Components/Projects/Projects";
export default function App() {
  return (
    <>
    <div className="imagenBack">
    <BeforeHeader/>
      <Header />
      <Galery />
      <Projects />
      <Footer/>
      <CardsPrueba/>
      </div>
    </>
  );
}
