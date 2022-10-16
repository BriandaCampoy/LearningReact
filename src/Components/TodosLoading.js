import React from "react";
import '../Styles/TodosLoading.css'

function TodosLoading(){
    return (
    <div className="LoadingTodo-conteiner">
        <span className="LoadingTodo-completeIcon"></span>
        <p className="LoadingTodo-text">Cargando TODOs...</p>
        <span className="LoadingTodo-deleteIcon"></span>
    </div>
        );
}

export {TodosLoading}