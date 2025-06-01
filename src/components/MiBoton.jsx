import React, { useState } from "react";

function MiBoton() {
  const [estaResaltado, setEstaResaltado] = useState(false);

  const handleClick = () => {
    setEstaResaltado(!estaResaltado);
  };

  return (
    <div>
      <button
        className={estaResaltado ? "resaltado" : ""}
        onClick={handleClick}
      >
        Haz clic aquí
      </button>
    </div>
  );
}

export default MiBoton;
