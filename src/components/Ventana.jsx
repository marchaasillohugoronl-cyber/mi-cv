// src/components/Ventana.jsx
const Ventana = ({ titulo, children }) => {
  return (
    <div className="ventana">
      <h2>{titulo}</h2>
      <div>{children}</div>
    </div>
  );
};

export default Ventana;
