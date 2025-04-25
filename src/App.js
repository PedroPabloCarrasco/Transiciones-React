import React, { useState } from 'react';

const Header = ({ show }) => {
  const headerStyles = {
    backgroundColor: show ? '#FF5733' : '#333',
    transform: show ? 'scale(1)' : 'scale(0)',
    position: 'absolute',
    textAlign: 'center',
    borderRadius: '4em',
    color: '#FFF',
    padding: '0.5em',
    margin: '0.5em',
    fontSize: '14px', // Corregí el typo "fontzize" a "fontSize"
    transition: 'all 800ms ease'
  };

  return (
    <header style={headerStyles}>
      <h1>Transiciones Css en linea <span role="img" aria-label="fuego">🔥</span></h1>
    </header>
  );
};

const App = () => {
  const [active, setActive] = useState(false);
  
  const toggle = () => setActive(!active);
  
  return (
    <div>
      <button onClick={toggle}>
        {active ? 'Activar' : 'Desactivar'} <span role="img" aria-label="fuego">🔥</span>
      </button>
      <Header show={active} />
    </div>
  );
};

export default App;