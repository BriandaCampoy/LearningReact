import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


ReactDOM.render(
  // Con etiqueta de apartura y cierre se puede enviar
  // un parametro especial que en este caso seria otro componente
    <App msj ="ey saludos">
      <button>React es mi tio</button>
    </App>,
  document.getElementById('root')
)

