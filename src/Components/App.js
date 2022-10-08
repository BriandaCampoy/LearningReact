// import logo from './logo.svg';
import React from 'react';
import { AppUI } from './AppUI';


// const url ='https://i.gifer.com/origin/82/821db1c1269c1d2d78abada219a95744.gif'
// const todosdefault =[
//   {text:'Abrir el acti',completed:false},
//   {text:'Saludar a la rata',completed:true},
//   {text:'Estudiar react',completed:false},
//   {text:'Reunion con rr',completed:false},
//   {text:'Clonar el repo',completed:true},
//   {text:'Tronar el repo',completed:false},
//   {text:'Arreglar el repo',completed:false},
//   {text:'Subir el repo ya arreglado',completed:false},
//   {text:'Pa casita',completed:false}
// ]

function useLocalStorage(){

  let localStorageTodos = localStorage.getItem('TODOS_V1');
  let parsedTodos;

  if(!localStorageTodos){
    localStorageTodos = localStorage.setItem('TODOS_V1', JSON.stringify('[]'));
    parsedTodos = [];
  }else{
    parsedTodos = JSON.parse(localStorageTodos);
  }
  
  const [todos,setTodos] = React.useState(parsedTodos)

  const saveTodos = (newTodos)=>{
    const stringifiedTodos = JSON.stringify(newTodos);
    localStorage.setItem('TODOS_V1', stringifiedTodos);
    setTodos(newTodos);
  }
}

function App(props) {



  const [searchValue, setSearchValue] = React.useState('');

  let filtredList= [];
  if(searchValue==''){
    filtredList=todos;
  }else{
    filtredList = todos.filter(todo=>todo.text.toLowerCase().includes(searchValue.toLowerCase()))
  }

  const completedTodos = filtredList.filter(todo=>todo.completed).length;
  const totalTodos = filtredList.length;



  const completeTodo = (text) =>{
    const todoIndex = todos.findIndex(todo => todo.text == text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  }

  const deleteTodo = (text) =>{
    const todoIndex = todos.findIndex(todo => todo.text == text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }

  return (
    <AppUI
      totalTodos={totalTodos} 
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      filtredList = {filtredList}
      completeTodo = {completeTodo}
      deleteTodo = {deleteTodo}
    />
  );
}

export default App;
