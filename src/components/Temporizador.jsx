import React, { useState, useEffect } from "react";

function Temporizador() {
  const [segundos, setSegundos] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setSegundos((prevSegundos) => +(prevSegundos + 0.01).toFixed(2)); // Incrementa en 0.01 segundos porque toFixed añade dos decimales
      }, 10); // 10 ms para mostrar centésimas
    } else {
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
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
      <p>Tiempo transcurrido: {segundos.toFixed(2)} segundos</p>
      <button onClick={handleIniciarPausar}>
        {isRunning ? "Pausar" : "Iniciar"}
      </button>
      &nbsp;&nbsp;&nbsp;
      <button onClick={handleReiniciar}>Reiniciar</button>
    </div>
  );
}

export default Temporizador;
