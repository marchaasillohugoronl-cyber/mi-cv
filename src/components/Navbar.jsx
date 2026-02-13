import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [abierto, setAbierto] = useState(false);

  return (
    <nav className="nav">
      <h2 className="logo">Hugo Machaca Sillo</h2>

      <button className="hamburguesa" onClick={() => setAbierto(!abierto)}>
        ☰
      </button>

      <ul className={`menu ${abierto ? "activo" : ""}`}>
        <li><Link to="/" onClick={() => setAbierto(false)}>Sobre mí</Link></li>
        <li><Link to="/contacto" onClick={() => setAbierto(false)}>Contacto</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
