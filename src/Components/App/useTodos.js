import React from 'react';
import {useLocalStorage} from './useLocalStorage';

// const TodoContext = React.createContext();

function useTodos(){
    const {
      item:todos,
      saveItem:saveTodos,
      loading,
      error
    } = useLocalStorage('TODOS_V1',[]);
    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);
  
    let todosBruto = todos.length;
    let searchedTodos= [];
    if(!searchValue.length>=1){
      searchedTodos=todos;
    }else{
      searchedTodos = todos.filter(todo=>{
        const todoText = todo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
        return todoText.includes(searchText);
      })
      // searchedTodos = todos.filter(todo=>todo.text.toLowerCase().includes(searchValue.toLowerCase()))
    }
    const completedTodos = searchedTodos.filter(todo=>todo.completed).length;
    const totalTodos = searchedTodos.length;
  
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
       {
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            addTodo,
            completeTodo, 
            deleteTodo,
            openModal,
            setOpenModal,
            todosBruto
        }
    )
}
export { useTodos }