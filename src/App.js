// import logo from './logo.svg';
import React from 'react';
import './App.css';
import TodoCounter from './TodoCounter.js';
import TodoSearch from './TodoSearch';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import CreateTodoButton from './CreateTodoButton.js';


// const url ='https://i.gifer.com/origin/82/821db1c1269c1d2d78abada219a95744.gif'
const todos =[
  {text:'Abrir el acti',completed:false},
  {text:'Saludar a la rata',completed:false},
  {text:'Estudiar react',completed:false},
  {text:'Reunion con rr',completed:false},
  {text:'Clonar el repo',completed:false}
]

function App(props) {
  return (
    <React.Fragment>
      <TodoCounter/>
      <TodoSearch/>
     
      <TodoList>
        {todos.map(todo=>(
          <TodoItem key={todo.text} text={todo.text}/>
        ))}
      </TodoList>

      <CreateTodoButton/>
    </React.Fragment>
  );
}

export default App;
