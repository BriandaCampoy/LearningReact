import React from 'react';
import {useLocalStorage} from './useLocalStorage';

// const TodoContext = React.createContext();

function useTodos(){
    const {
      item:todos,
      saveItem:saveTodos,
      sincronizeItem:sincronizeTodos,
      loading,
      error
    } = useLocalStorage('TODOS_V2',[]);
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
  
    const completeTodo = (id) =>{
      const todoIndex = todos.findIndex(todo => todo.id === id);
      const newTodos = [...todos];
      newTodos[todoIndex].completed = true;
      saveTodos(newTodos);
    }
  
    const editTodo = (id, newText) =>{
      const todoIndex = todos.findIndex(todo => todo.id === id);
      const newTodos = [...todos];
      newTodos[todoIndex].text = newText;
      saveTodos(newTodos);
    }
  
    const deleteTodo = (id) =>{
      const todoIndex = todos.findIndex(todo => todo.id === id);
      const newTodos = [...todos];
      newTodos.splice(todoIndex, 1);
      saveTodos(newTodos);
    }
    const getTodobyId = (id)=>{
      const todoIndex = todos.findIndex(todo => todo.id === id);
      return todos[todoIndex];
    }

    const addTodo= (text) =>{
      const id = newTodoId(todos);
      const newTodo = {
        "text":text,
        "completed":false,
        "id":id
      }
      const newTodos = [...todos];
      newTodos.push(newTodo);
      saveTodos(newTodos);
    }

    const states = {
      loading,
      error,
      totalTodos,
      completedTodos,
      searchValue,
      searchedTodos,
      todosBruto,
      openModal,
      getTodobyId,
    }
    const updaters = {
      setSearchValue,
      addTodo,
      completeTodo, 
      deleteTodo,
      editTodo,
      setOpenModal,
      sincronizeTodos,
    }
  
    return{states, updaters}
    
}

function newTodoId(todoList){
  if(!todoList.length){
    return 0
  }
  else{
    return todoList[todoList.length-1].id+1
  }
}

export { useTodos }