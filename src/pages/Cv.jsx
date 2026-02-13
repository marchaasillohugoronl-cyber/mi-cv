import React, { useRef } from "react";
import MiFoto from "../assets/mi-foto.jpeg";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

import "./Cv.css";

import {
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function App() {
  const cvRef = useRef(null);

  const descargarPDF = async () => {
    const element = cvRef.current;
    const canvas = await html2canvas(element);
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const imgWidth = 210;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
    pdf.save("CV-Hugo-Ronal.pdf");
  };

  return (
    <div className="cv-container" ref={cvRef}>
      {/* Header */}
      <div className="cv-header">
        <div className="cv-photo">
          <img src={MiFoto} alt="Hugo Ronal" className="photo-img" />
        </div>

        <div className="cv-title">
          <h1>Hugo Ronal Machaca Sillo</h1>
          <p>
            Estudiante de Ingeniería de Software con formación en desarrollo web y backend. Experiencia en proyectos académicos utilizando Java (Spring Boot), JavaScript (React, Node.js) y bases de datos relacionales. Interesado en realizar prácticas profesionales donde pueda aplicar mis conocimientos, contribuir en equipo y seguir desarrollando habilidades en entornos reales de desarrollo.
          </p>
        </div>

        <button onClick={descargarPDF}>
          Descargar PDF
        </button>
      </div>

      {/* Cuerpo */}
      <div className="cv-body">
        {/* Sidebar */}
        <aside className="cv-sidebar">
          <div className="sidebar-section">
            <h2>Contacto</h2>

            <div className="contact-item">
              <FaMapMarkerAlt className="icon" />
              <p>Selva alegre, Av independecia con Francisco Mostajo</p>
            </div>

            <div className="contact-item">
              <FaWhatsapp className="icon whatsapp" />
              <p>929161455</p>
            </div>

            <div className="contact-item">
              <FaEnvelope className="icon email" />
              <p>
                marchaasillohugoronl@gmail.com
              </p>
            </div>
          </div>

          <div className="sidebar-section">
            <h2>Redes</h2>

            <a
              href="https://github.com/marchaasillohugoronl-cyber"
              target="_blank"
              rel="noreferrer"
              className="contact-item link"
            >
              <FaGithub className="icon github" />
              <p>GitHub</p>
            </a>
          </div>

          <div className="sidebar-section">
            <h2>Idiomas</h2>
            <p>
              <strong>Inglés:</strong> Básico
            </p>
          </div>

          <div className="sidebar-section">
            <h2>Lenguajes</h2>
            <ul>
              <li>Python</li>
              <li>PHP</li>
              <li>Java / JavaScript</li>
              <li>HTML / CSS</li>
            </ul>
          </div>
        </aside>

        {/* Contenido principal */}
        <main className="cv-main">
          <section className="main-section">
            <h2>Habilidades Técnicas</h2>
            <ul>
              <li>Frontend: React</li>
              <li>Backend: Node.js, Spring Boot</li>
              <li>Bases de Datos: PostgreSQL, MySQL</li>
              <li>Sistemas Operativos / Servidores: Kali Linux, Ubuntu Server</li>
              <li>Herramientas y comandos: Bash, Nmap, Git, GitHub</li>
            </ul>
          </section>

          <section className="main-section">
            <h2>Formación Académica</h2>
            <p>
              SENATI
              2024 – Actualidad
              Actualmente cursando 4.º semestre (2026).
              Formación en desarrollo web, programación orientada a objetos, bases de datos, redes y fundamentos de inteligencia artificial.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
