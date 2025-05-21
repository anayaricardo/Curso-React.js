import React, { useState } from 'react';

function MiBoton() {
  const [estaResaltado, setEstaResaltado] = useState(false);

  const handleClick = () => {
    setEstaResaltado(!estaResaltado);
  };

  return (
    <button className={estaResaltado ? 'resaltado' : ''} onClick={handleClick}>
      Haz clic aquí
    </button>
  );
}

export default MiBoton;