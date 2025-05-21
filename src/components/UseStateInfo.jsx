import React from 'react';
const UseStateInfo = () => {
  return (
    <div>
      <h2>¿Cuándo usar 'useState' en React?</h2>
      <p>El <strong><code>useState</code></strong> de React es un <strong>hook fundamental</strong> y se utiliza en una amplia variedad de situaciones donde necesitas que un componente mantenga y actualice información que afecta a su renderizado. Aquí te presento algunos de los casos más comunes:</p>

      <h3>1. Control de Elementos de Formulario:</h3>
      <ul>
        <li><strong>Entradas de texto</strong> (<code>&lt;input type="text"&gt;</code>, <code>&lt;textarea&gt;</code>): Para capturar y actualizar el valor que el usuario escribe.</li>
        <li><strong>Casillas de verificación</strong> (<code>&lt;input type="checkbox"&gt;</code>): Para rastrear si están marcadas o no.</li>
        <li><strong>Botones de radio</strong> (<code>&lt;input type="radio"&gt;</code>): Para saber cuál opción está seleccionada.</li>
        <li><strong>Listas desplegables</strong> (<code>&lt;select&gt;</code>): Para mantener el valor seleccionado.</li>
      </ul>
      <p>Ejemplo:</p>
    </div>
  );
};

export default UseStateInfo;