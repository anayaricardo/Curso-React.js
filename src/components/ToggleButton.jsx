import { useState } from "react";

const ToggleButton = () => {
  const [isActive, setIsActive] = useState(false); //Booleano //!!!!!!!!!!!!!!!!!!!!!!!!! Booleanos
  return (
    <div>
      <button onClick={() => setIsActive(!isActive)}>
        {isActive ? "Activo 😃" : "Inactivo 😴"}
      </button>
    </div>
  );
};

export default ToggleButton;
