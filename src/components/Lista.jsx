import React from 'react';

const Lista = ({ elementos }) => {
  return (
    <ul>
      {elementos.map((elemento, index) => (
        <li key={index}>{elemento}</li>
      ))}
    </ul>
  );
};

export default Lista;
