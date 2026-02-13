
import "./Proyectos.css";

const Proyectos = () => {
  const proyectos = [
    {
      titulo: "Portfolio Web",
      tecnologias: "React + CSS",
      descripcion: "Sitio web personal con diseño moderno"
    },
    {
      titulo: "App de tareas",
      tecnologias: "React Hooks",
      descripcion: "Gestor de tareas con estado local"
    },
    {
      titulo: "Clon UI",
      tecnologias: "HTML, CSS, JavaScript",
      descripcion: "Réplica de interfaz popular"
    }
  ];

  return (
    <section id="proyectos">
      <h2>Proyectos</h2>
      <ul>
        {proyectos.map((proyecto, index) => (
          <li key={index}>
            <strong>{proyecto.titulo}</strong>
            {proyecto.tecnologias}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Proyectos;