
import React, { useState } from 'react';
import Boton1 from './components/Boton1';
import Lista from './components/Lista';

const App = () => {
  // Estado para almacenar la lista de elementos
  const [elementos, setElementos] = useState([]);

  // Función para agregar un nuevo elemento a la lista
  const agregarElemento = () => {
    const nuevoElemento = `El punto ${elementos.length + 1} ha sido añadido a la lista.`;
    setElementos([...elementos, nuevoElemento]);
  };

  return (
    <div className='top-container'>
      <Boton1 onAgregar={agregarElemento} />
      <Lista elementos={elementos} />
    </div>
  );
};

export default App;


