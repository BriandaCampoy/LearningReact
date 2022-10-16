import React from "react";
import ReactDOM from 'react-dom';
import '../Styles/modal.css'
import { TodoContext} from "./TodoContext";

function Modal(){
    const {setOpenModal,addTodo} = React.useContext(TodoContext);
    const cancel = ()=>{
        setOpenModal(false);
    }
    const add = ()=>{
        const text = document.getElementById('text')
        addTodo(text.value);
        text.value = "";
        cancel();
    }
    return ReactDOM.createPortal(
        <div className="modal-conteiner">
            <div className="modal">
                <h3>Escribe tu nuevo <span>Todo</span></h3>
                <textarea id="text" placeholder="Hacer la tarea"></textarea>
                <div className="btn-conteiner">
                    <button className="btnCancelar" id="cancelar" onClick={cancel}>Cancelar</button>
                    <button className="btnPrimary" id="agregar" onClick={add}>Añadir</button>
                </div>
           </div>
        </div>,
        document.getElementById('modal')
    )    
}

export {Modal};