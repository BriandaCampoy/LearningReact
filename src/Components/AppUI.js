import React from "react";
import '../Styles/App.css';
import TodoCounter from './TodoCounter.js';
import TodoSearch from './TodoSearch';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import CreateTodoButton from './CreateTodoButton.js';
import { TodoContext } from "./TodoContext";
import { Modal } from "./modal";

function AppUI(){
  
  const {
    error,
    loading,
    filtredList,
    completeTodo,
    deleteTodo,
    openModal,
    // setOpenModal
  } = React.useContext(TodoContext)

    return(
        <React.Fragment>
      <TodoCounter/>
      <TodoSearch/>
          <TodoList>
            {error && <p>Jaja trono</p>}
            {loading && <p>Cargando</p>}
            {(!loading && !filtredList.length && !error) && <p>Jalo</p>}

            {filtredList.map(todo=>(
              <TodoItem 
              key={todo.text} 
              text={todo.text} 
              completed={todo.completed}
              onComplete = {()=>completeTodo(todo.text)}
              onDelete = {()=>deleteTodo(todo.text)}
              />
            ))}
      </TodoList>
      { openModal && (
          <Modal>
          </Modal>
      )}

      <CreateTodoButton
        // setOpenModal = {setOpenModal}
      />
    </React.Fragment>
    );
}

export {AppUI};