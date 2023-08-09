import React from 'react';
import './Boton.css';

const Boton1 = ({ onAgregar }) => {
  return <button className="my-button" onClick={onAgregar}>Añadir elemento</button>;
};

export default Boton1;
