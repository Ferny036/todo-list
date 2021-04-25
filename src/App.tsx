import "./styles/App.scss";
import ListaDias from "./components/listadias.component";
import ListaTareas from "./components/listaTareas.component"
import { useState } from "react";

const App = () => {
  const [diaActual, setDiaActual] = useState<Date>(new Date());

  return (
    <>
      <ListaDias day={diaActual} updateDay={setDiaActual} />
      <section className="wrapper">
        <ListaTareas dia={diaActual} />
      </section>
    </>);
}

export default App;
