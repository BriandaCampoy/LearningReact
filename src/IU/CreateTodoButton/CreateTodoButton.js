import React from 'react';
import './CreateTodoButton.css';
// import { TodoContext } from "./TodoContext";

function CreateTodoButton(props){
    // const {openModal, setOpenModal} = React.useContext(TodoContext);
    console.log()
    const onClickButton = ()=>{
        props.setOpenModal(prevState => !prevState);
    }
    
    return(
        <button 
            className="btnTodo" 
            onClick={onClickButton}
            >
                +
        </button>
    );
}

export {CreateTodoButton};