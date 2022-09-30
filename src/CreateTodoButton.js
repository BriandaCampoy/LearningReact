import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(){
    const onClickButton = (msg)=>{
        alert(msg);
    }
    return(
        <button 
            className="btnTodo" 
            onClick={()=>onClickButton("El mensaje")}
            >
                +
        </button>
    );
}

export default CreateTodoButton;