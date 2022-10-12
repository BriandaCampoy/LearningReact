import React from "react";
import '../Styles/App.css';
import TodoCounter from './TodoCounter.js';
import TodoSearch from './TodoSearch';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import CreateTodoButton from './CreateTodoButton.js';
import { TodoContext } from "./TodoContext";

function AppUI({
    loading,
    error,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    filtredList,
    completeTodo,
    deleteTodo,
}){
    return(
        <React.Fragment>
      <TodoCounter/>
      <TodoSearch/>
     
    <TodoContext.Consumer>
      {({error,loading,filtredList,completeTodo,deleteTodo})=>{
        return(
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
        )
      }}
    </TodoContext.Consumer>

      <CreateTodoButton/>
    </React.Fragment>
    );
}

export {AppUI};