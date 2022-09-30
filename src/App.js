// import logo from './logo.svg';
import React from 'react';
import './App.css';
import TodoCounter from './TodoCounter.js';
import TodoSearch from './TodoSearch';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import CreateTodoButton from './CreateTodoButton.js';


// const url ='https://i.gifer.com/origin/82/821db1c1269c1d2d78abada219a95744.gif'
const todosdefault =[
  {text:'Abrir el acti',completed:false},
  {text:'Saludar a la rata',completed:true},
  {text:'Estudiar react',completed:false},
  {text:'Reunion con rr',completed:false},
  {text:'Clonar el repo',completed:true},
  {text:'Tronar el repo',completed:false},
  {text:'Arreglar el repo',completed:false},
  {text:'Subir el repo ya arreglado',completed:false},
  {text:'Pa casita',completed:false}
]

function App(props) {

  const [todos,setTodos] = React.useState(todosdefault)
  const [searchValue, setSearchValue] = React.useState('');

  let filtredList= [];
  if(searchValue==''){
    filtredList=todos;
  }else{
    filtredList = todos.filter(todo=>todo.text.toLowerCase().includes(searchValue.toLowerCase()))
  }

  const completedTodos = filtredList.filter(todo=>todo.completed).length;
  const totalTodos = filtredList.length;

  return (
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
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
        ))}
      </TodoList>

      <CreateTodoButton/>
    </React.Fragment>
  );
}

export default App;
