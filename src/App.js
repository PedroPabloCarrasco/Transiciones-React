import React, { useState } from 'react';
import './App.css'; // puedes ignorar esto si todo va en un solo archivo

const Header = ({ show, toggle }) => {
  return (
    <header className={`header ${show ? 'show' : 'hide'}`}>
      <h1>Transiciones CSS en línea <span role="img" aria-label="fuego">🔥</span></h1>
      <p>Ejemplo de transiciones distintas en cada botón al presionar.</p>
      <button className="btn fade-btn" onClick={toggle}>Ver más</button>

      <div className="section">
        <div className="card">
          <h2>Transiciones en CSS</h2>
          <p>Permiten animar estilos entre estados.</p>
          <button className="btn scale-btn">Ver ejemplo</button>
        </div>
        <div className="card">
          <h2>Botones personalizables</h2>
          <p>Podés animarlos como quieras al hacer clic.</p>
          <button className="btn rotate-btn">Ver ejemplo</button>
        </div>
        <div className="card">
          <h2>Contenido dinámico</h2>
          <p>Contenido que responde a eventos y se actualiza.</p>
          <button className="btn slide-btn">Ver ejemplo</button>
        </div>
        <div className="card">
          <h2>Ejemplos combinados</h2>
          <p>Probamos todo junto con diferentes estilos.</p>
          <button className="btn bounce-btn">Ver ejemplo</button>
        </div>
      </div>

      <footer className="footer">
        <p>&copy; 2025 Transiciones CSS</p>
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Acerca</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </footer>
    </header>
  );
};

const App = () => {
  const [active, setActive] = useState(false);

  return (
    <div className="app">
      <button className="toggle-btn" onClick={() => setActive(!active)}>
        {active ? 'Ocultar' : 'Mostrar'} Header <span role="img" aria-label="fuego">🔥</span>
      </button>
      <Header show={active} toggle={() => setActive(!active)} />
    </div>
  );
};

export default App;
