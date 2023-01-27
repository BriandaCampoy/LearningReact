import React from 'react';
import { useStorageListener } from './useStorageListener';
import './style.css'

function ChangeAlert({sincronize}){
  const{show, toggleShow} = useStorageListener(sincronize);
  if(show){
    return (
    <div className="alert">
      <div className="alert-content">
        <p>Hubo cambios, es necesario que vuelvas a cargar la informacion antes de continuar</p>
        <button
        className="btn-reload"
          onClick={()=> toggleShow(false)}
          >
            Volver a cargar la informacion
          </button>
      </div>
    </div>
    )
  }else{
    return null;
  }
}

// const ChangeAlertWithStorageListener = useStorageListener(ChangeAlert)

export {ChangeAlert}