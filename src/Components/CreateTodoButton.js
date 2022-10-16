import React from 'react';
import '../Styles/CreateTodoButton.css';
import { TodoContext } from "./TodoContext";

function CreateTodoButton(){
    const {openModal, setOpenModal} = React.useContext(TodoContext);
    const onClickButton = ()=>{
        setOpenModal(!openModal);
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

export default CreateTodoButton;