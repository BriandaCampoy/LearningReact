import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {useTodos} from '../useTodos';
function EditPage(){
  const location = useLocation();

  const {id} = useParams();
  const {states, updaters}= useTodos()
  const {editTodo} = updaters;
  const {getTodobyId, loading} = states;
  const navigate = useNavigate()

  
  function onCancel(){
    navigate('/')
  }
  function onSubmit(e){
    e.preventDefault()
    const text =e.target.todo.value;
    editTodo(Number(id), text)
    navigate('/')
  }
  
  let todoText;
  if(location.state?.todo){
    todoText = location.state.todo.text;
  } else if(loading){
    return <p>Cargando...</p>
  }else{
    const todo = getTodobyId(Number(id));
    todoText = todo.text
  }
  return(
    <>
    <form action="" onSubmit={onSubmit}>
      <label htmlFor="todo">
        Edita el texto de tu ToDo:
        <textarea name="todo" id="todo" required placeholder="Terminar el papeleo" defaultValue={todoText}></textarea>
        <button className="TodoForm-button TodoForm-button--cancel" onClick={onCancel}>Cancelar</button>
        <button className="TodoForm-button TodoForm-button--add" type='submit' >Guardar</button>
      </label>
    </form>
  </>
)
  
}

export default EditPage