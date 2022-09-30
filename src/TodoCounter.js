// import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import React from "react";
import './TodoCounter.css'

// const estilos = {
//     color: 'red',
//     backgroundColor: 'yellow ',
// };
// Otra forma de aplicar esto seria
// <h2 Style={estilos}></h2>

function TodoCounter({total, completed}){
    return(
        <h2 className="TodoCounter">Has completado {completed} de {total}</h2>
    );
}

export default TodoCounter;