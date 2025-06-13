import { useState } from "react";
import confetti from "canvas-confetti";

const NameForm = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [submit, setSubmit] = useState(false);

  const handleClick = async () => {
    if (submit) return;
    await new Promise((resolve) => setTimeout(resolve, 50));
    setSubmit(true);
    confetti({
      particleCount: 50,
      spread: 30,
    });
    // Permitir volver a activar el botón después de 2 segundos
    setTimeout(() => setSubmit(false), 500);
  };

  return (
    <>
      <div>
        <h3>Eventos y manejo de estado en React: name form interactivo</h3>
        <p>
          La gestión de eventos en React es una habilidad fundamental para crear
          aplicaciones interactivas y dinámicas. A través de los eventos,
          podemos capturar las acciones del usuario como clics, entradas de
          texto o movimientos del ratón, y responder a ellas de manera
          eficiente. React simplifica este proceso con su sistema de eventos
          sintéticos, permitiéndonos crear interfaces de usuario altamente
          responsivas con un código limpio y mantenible.
        </p>
      </div>
      <div>
        <h3>¿Qué son los eventos sintéticos en React?</h3>
        <p>
          Los eventos en React funcionan de manera similar a los eventos nativos
          de HTML, pero con algunas diferencias importantes. React implementa un
          sistema de eventos sintéticos que actúan como una capa de abstracción
          sobre los eventos nativos del navegador.
          <br />
          <br />
          Una diferencia notable es la sintaxis: mientras que en HTML utilizamos
          nombres de eventos en minúsculas como <code>onclick</code>, en React
          empleamos <strong>camelCase</strong>, escribiendo <code>onClick</code>
          . Esta convención de nomenclatura es característica de React y se
          aplica a todos los eventos que manejamos.
          <br />
          <br />
          Otra diferencia fundamental es que en React no pasamos strings a los
          manejadores de eventos, sino <strong>funciones</strong>. Esto nos
          permite ejecutar código más complejo y manipular el estado de nuestros
          componentes cuando ocurre un evento.
          <br />
          <br />
        </p>
      </div>
      <div style={{ margin: "1em 0" }}>
        // HTML tradicional
        <br />
        <br />
        <code>{'<button onclick="HandleClick()">Click aquí</button>'}</code>
        <br />
        <br />
        // React
        <br />
        <br />
        <code>{"<button onClick={HandleClick}>Click aquí</button>"}</code>
      </div>
      <div>
        <h3>¿Cómo crear un formulario interactivo con eventos?</h3>
        <p>
          Vamos a crear un componente que capture la entrada de texto de un
          usuario y muestre un saludo personalizado en tiempo real. Este ejemplo
          ilustra perfectamente cómo los eventos y el estado trabajan juntos en
          React.
        </p>
        <p>Ejemplo:</p>
      </div>
      <div>
        <input
          type="text"
          placeholder="3scr1be tu n0mbr3"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="3scr1be tu ape11id0"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <p>
          🤖 H0la, {name || "hum4n0 🧬"} {lastName}
        </p>
        <button onClick={handleClick} disabled={submit}>
          Tu premio{""}
        </button>
      </div>
      {/* Explicación fuera de <p> para evitar error de anidamiento */}
      <div>
        En este componente:
        <ul>
          <li>
            1. Creamos un estado llamado <code>name</code> inicializado como un
            string vacío
          </li>
          <li>
            2. Utilizamos el evento <code>onChange</code> para detectar cuando
            el usuario escribe en el input
          </li>
          <li>
            3. Actualizamos el estado <code>name</code> con el valor actual del
            input
          </li>
          <li>
            4. Mostramos un saludo personalizado, usando un operador ternario
            para mostrar "visitante" cuando no hay nombre
          </li>
          <br />
          <br />
        </ul>
      </div>
      <div>
        <h3>¿Qué otros eventos podemos manejar en React?</h3>
        <ul>
          <li>
            Eventos de ratón: <code>onClick</code>, <code>onMouseOver</code>,{" "}
            <code>onMouseOut</code>
          </li>
          <li>
            Eventos de formulario: <code>onChange</code>, <code>onSubmit</code>,{" "}
            <code>onFocus</code>, <code>onBlur</code>
          </li>
          <li>
            Eventos de teclado: <code>onKeyDown</code>, <code>onKeyPress</code>,{" "}
            <code>onKeyUp</code>
          </li>
          <li>
            Eventos de clipboard: <code>onCopy</code>, <code>onCut</code>,{" "}
            <code>onPaste</code>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NameForm;
