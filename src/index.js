import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';


ReactDOM.render(
  // Con etiqueta de apartura y cierre se puede enviar
  // un parametro especial que en este caso seria otro componente
    <App/>,
  document.getElementById('root')
)

