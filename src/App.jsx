import "./App.css";
import { Footer } from "./Components/Footer/Footer";
import { Galery } from "./Components/Galeria/Galery";
import { Header } from "./Components/Header/Header";
import { Projects } from "./Components/Projects/Projects";
import { Slice } from "./Components/SliceMercadoPago/Slice";
export default function App() {
  return (
    <>
    <Slice/>
      <Header />
      <Galery />
      <Projects />
      <Footer/>
    </>
  );
}
