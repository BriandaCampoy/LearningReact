import React from 'react';
// import { createContext } from './';
import {useLocalStorage} from './useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider(props){
    const {
      item:todos,
      saveItem:saveTodos,
      loading,
      error
    } = useLocalStorage('TODOS_V1',[]);
    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);
  
    let filtredList= [];
    if(!searchValue.length>=1){
      filtredList=todos;
    }else{
      filtredList = todos.filter(todo=>{
        const todoText = todo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
        return todoText.includes(searchText);
      })
      // filtredList = todos.filter(todo=>todo.text.toLowerCase().includes(searchValue.toLowerCase()))
    }
    const completedTodos = filtredList.filter(todo=>todo.completed).length;
    const totalTodos = filtredList.length;
  
    const completeTodo = (text) =>{
      const todoIndex = todos.findIndex(todo => todo.text === text);
      const newTodos = [...todos];
      newTodos[todoIndex].completed = true;
      saveTodos(newTodos);
    }
  
    const deleteTodo = (text) =>{
      const todoIndex = todos.findIndex(todo => todo.text === text);
      const newTodos = [...todos];
      newTodos.splice(todoIndex, 1);
      saveTodos(newTodos);
    }

    const addTodo= (text) =>{
      const newTodo = {
        "text":text,
        "completed":false
      }
      const newTodos = [...todos];
      newTodos.push(newTodo);
      saveTodos(newTodos);
    }
  
    return(
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            filtredList,
            completeTodo, 
            deleteTodo,
            openModal,
            setOpenModal,
            addTodo,
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}


export {TodoContext, TodoProvider}