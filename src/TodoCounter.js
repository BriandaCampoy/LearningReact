import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import React from "react";
import './TodoCounter.css'

// const estilos = {
//     color: 'red',
//     backgroundColor: 'yellow ',
// };
// Otra forma de aplicar esto seria
// <h2 Style={estilos}></h2>

function TodoCounter(){
    return(
        <h2 className="TodoCounter">Has completado 2 de 3</h2>
    );
}

export default TodoCounter;