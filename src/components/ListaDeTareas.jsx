import React, { useState } from 'react';

function ListaDeTareas() {
  const [tareas, setTareas] = useState(['Comprar pan', 'Lavar el coche']);
  const [nuevaTarea, setNuevaTarea] = useState('');

  const handleInputChange = (event) => {
    setNuevaTarea(event.target.value);
  };

  const handleAgregarTarea = () => {
    if (nuevaTarea.trim() !== '') {
      setTareas([...tareas, nuevaTarea]);
      setNuevaTarea('');
    }
  };

  const handleEliminarTarea = (index) => {
    const nuevasTareas = [...tareas];
    nuevasTareas.splice(index, 1);
    setTareas(nuevasTareas);
  };

  return (
    <div>
      <h2>Lista de Tareas</h2>
      <ul>
        {tareas.map((tarea, index) => (
          <li key={index}>
            {tarea} &nbsp;&nbsp;&nbsp;<button onClick={() => handleEliminarTarea(index)}>Eliminar</button><br/><br/>
          </li>
        ))}
      </ul>
      <input type="text" value={nuevaTarea} onChange={handleInputChange} />
      &nbsp;&nbsp;&nbsp;<button onClick={handleAgregarTarea}>Agregar Tarea</button>
    </div>
  );
}

export default ListaDeTareas;