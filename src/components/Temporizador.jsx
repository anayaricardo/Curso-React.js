import React, { useState, useEffect } from "react";

function Temporizador() {
  const [segundos, setSegundos] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setSegundos((prevSegundos) => prevSegundos + 1);
      }, 1000);
    } else {
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId); // Limpieza al desmontar el componente
  }, [isRunning]);

  const handleIniciarPausar = () => {
    setIsRunning(!isRunning);
  };

  const handleReiniciar = () => {
    setSegundos(0);
    setIsRunning(false);
  };

  return (
    <div>
      <p>Tiempo transcurrido: {segundos} segundos</p>
      <button onClick={handleIniciarPausar}>
        {isRunning ? "Pausar" : "Iniciar"}
      </button>
      &nbsp;&nbsp;&nbsp;
      <button onClick={handleReiniciar}>Reiniciar</button>
    </div>
  );
}

export default Temporizador;
