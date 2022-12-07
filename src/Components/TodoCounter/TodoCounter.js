// import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import React from "react";
import './TodoCounter.css'  
// const estilos = {
//     color: 'red',
//     backgroundColor: 'yellow ',
// };
// Otra forma de aplicar esto seria
// <h2 Style={estilos}></h2>

function TodoCounter({completedTodos,totalTodos, loading} ){ 
    return(
        <h2 className={`TodoCounter ${!!loading && "TodoCounter--loading"}`}>Has completado {completedTodos} de {totalTodos}</h2>
    );
}

export {TodoCounter};
