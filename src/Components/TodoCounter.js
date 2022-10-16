// import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import React from "react";
import '../Styles/TodoCounter.css'
import { TodoContext } from "./TodoContext";
// const estilos = {
//     color: 'red',
//     backgroundColor: 'yellow ',
// };
// Otra forma de aplicar esto seria
// <h2 Style={estilos}></h2>

function TodoCounter(){
    const {totalTodos, completedTodos}  = React.useContext(TodoContext)
    return(
        <h2 className="TodoCounter">Has completado {completedTodos} de {totalTodos}</h2>
    );
}

export default TodoCounter;