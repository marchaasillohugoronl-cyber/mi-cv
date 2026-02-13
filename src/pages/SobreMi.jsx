import { Link } from "react-router-dom";
import "./SobreMi.css";

const SobreMi = () => {
  return (
    <section id="sobre-mi">
      <div className="contenedor-profesional">
        {/* Encabezado profesional */}
        <div className="encabezado">
          <h1 className="titulo-principal">Estudiante de Ing de Software</h1>
          <div className="linea-separadora"></div>
          <p className="subtitulo">"Apasionado por el código libre, con ganas reales de aprender"</p>
        </div>

        {/* Presentación */}
        <div className="presentacion">
          <p className="texto-principal">
            Estudiante de Desarrollo de Software en SENATI, con bases sólidas en programacion orientada a objetos e informática y enfoque resolutivo. Cuento con conocimientos en virtualización y fundamentos de redes. Apasionado por el código libre y los entornos Linux, me enfoco en el desarrollo de soluciones basadas en datos, automatización y arquitectura de software eficiente.
          </p>
        </div>

        {/* Áreas de especialización */}
        <div className="areas-especializacion">
          <h3 className="titulo-seccion">Habilidades Técnicas</h3>
          <div className="grid-especialidades">
            <div className="item-especialidad">
              <div className="numero">01</div>
              <h4>Arquitecturas y Patrones</h4>
              <p>- MVC (Model–View–Controller)</p>
              <p>- Arquitectura en capas</p>
              <p>APIs REST</p>
            </div>
            <div className="item-especialidad">
              <div className="numero">02</div>
              <h4>Frameworks y Tecnologías</h4>
              <p>Spring Boot</p>
              <p>Node.js</p>
              <p>React</p>
              <p>Angular</p>



            </div>
            <div className="item-especialidad">
              <div className="numero">03</div>
              <h4>Lenguajes de Programación</h4>
              <p>Python</p>
              <p>Java</p>
              <p>PHP</p>
              <p>JavaScrip</p>
            
            </div>
            <div className="item-especialidad">
              <div className="numero">04</div>
              <h4>Bases de Datos</h4>
              <p>MySQL</p>
              <p>PostgreSQL</p>
            </div>
            <div className="item-especialidad">
              <div className="numero">05</div>
              <h4>Sitemas operativos y herramientas</h4>
              <p>linux</p>
              <p>nmap</p>
              <p>scripbash</p>
            </div>
          </div>
          
        </div>

        {/* Botones de acción */}
        <div className="acciones">
          <Link to="/contacto" className="enlace-boton">
            <button className="boton boton-principal">Contacto Profesional</button>
          </Link>
          <Link to="/cv" className="enlace-boton">
            <button className="boton boton-secundario">Ver Curriculum Vitae</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SobreMi;