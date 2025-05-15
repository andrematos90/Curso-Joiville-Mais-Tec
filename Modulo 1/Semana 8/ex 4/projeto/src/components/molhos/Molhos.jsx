
import React from 'react';

const Molhos = ({ molhos }) => {
  return (
    <ul className="molhos-lista">
      {molhos.map((molho, index) => (
        <li key={index}>{molho}</li>
      ))}
    </ul>
  );
};

export default Molhos;
