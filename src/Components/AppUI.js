import React from "react";
import '../Styles/App.css';
import TodoCounter from './TodoCounter.js';
import TodoSearch from './TodoSearch';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import CreateTodoButton from './CreateTodoButton.js';

function AppUI({
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
      <TodoCounter 
      total={totalTodos} 
      completed={completedTodos}
      />
      <TodoSearch
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      />
     
      <TodoList>
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

      <CreateTodoButton/>
    </React.Fragment>
    );
}

export {AppUI};