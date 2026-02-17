import "./Contacto.css";
import {
  FaEnvelope,
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
  FaTelegramPlane,
  FaStackOverflow,
  FaTwitter,
  FaDiscord
} from "react-icons/fa";

const Contacto = () => {
  const contactos = [
    {
      nombre: "Email",
      valor: "marchaasillohugoronl@gmail.com",
      enlace: "mailto:marchaasillohugoronl@gmail.com",
      icono: <FaEnvelope />,
      comando: "send-mail"
    },
    {
      nombre: "WhatsApp",
      valor: "+51 916 543 545",
      enlace: "https://wa.me/+51916543545",
      icono: <FaWhatsapp />,
      comando: "whatsapp"
    },
    {
      nombre: "GitHub",
      valor: "github.com/marchaasillohugoronl-cyber",
      enlace: "https://github.com/marchaasillohugoronl-cyber",
      icono: <FaGithub />,
      comando: "github"
    },

    
  ];

  return (
    <section id="contacto">
      <div className="contenedor-contacto">
        <div className="header-contacto">
          <h2>Contacto</h2>
          <p className="descripcion">
            Disponible para colaboraciones y oportunidades
          </p>
        </div>

        <div className="grid-contactos">
          {contactos.map((contacto, index) => (
            <a
              key={index}
              href={contacto.enlace}
              className="card-contacto"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="icono-contacto">
                {contacto.icono}
              </div>

              <div className="info-contacto">
                <span className="nombre-contacto">{contacto.nombre}</span>
                <span className="valor-contacto">{contacto.valor}</span>
                <span className="comando">$ {contacto.comando} --connect</span>
              </div>

              <div className="flecha">→</div>
            </a>
          ))}
        </div>

        <div className="footer-contacto">
          <p className="nota">// Tecnica/ Ingenio/ Rapidez</p>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
