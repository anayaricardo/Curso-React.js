import { useState } from 'react';

function MiFormulario() {
  const [nombre, setNombre] = useState('');
  const [estaMarcado, setEstaMarcado] = useState(false);

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    setEstaMarcado(event.target.checked);
  };

  return (
    <div>
      <label>
        Nombre:&nbsp;&nbsp;
        <input type="text" value={nombre} onChange={handleNombreChange} />    
      </label>
      <br/>
      <br/>
      <label>
        <input type="checkbox" checked={estaMarcado} onChange={handleCheckboxChange} />
        &nbsp;&nbsp;Aceptar términos
      </label>
      <br/>
      <br/>
      <p>Nombre ingresado: {nombre}</p>
      <p>¿Términos aceptados?: {estaMarcado ? 'Sí' : 'No'}</p>
    </div>
  );
}

export default MiFormulario;