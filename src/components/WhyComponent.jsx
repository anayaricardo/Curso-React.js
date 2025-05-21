import React from 'react';
const WhyComponent = () => {
  return (
    <div>
      <h3>¿Por qué hacer esto un componente?</h3>
      <ul>
        <li><strong>Reutilización:</strong> Una vez definido, puedes mostrar esta información en múltiples partes de tu aplicación sin copiar y pegar el código HTML.</li>
        <li><strong>Mantenibilidad:</strong> Si necesitas actualizar el texto o el formato, solo lo haces en un lugar.</li>
        <li><strong>Organización:</strong> Ayuda a mantener tu código más limpio y modular, separando responsabilidades.</li>
      </ul>
      <p>Ejemplo:</p>
    </div>
  );
};

export default WhyComponent;