import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import SobreMi from "./pages/SobreMi";
import Proyectos from "./pages/Proyectos";
import Contacto from "./pages/Contacto";
import Cv from "./pages/Cv";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<SobreMi />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/cv" element={<Cv />} />
      </Routes>
    </>
  );
}

export default App;
