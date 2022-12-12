import React from 'react';
// import ReactDOM from 'react-dom';
import './TodoForm.css'

function TodoForm({addTodo, setOpenModal}) {
  const [newTodoValue, setNewTodoValue]= React.useState('');

  const onChange = (event)=>{
    setNewTodoValue(event.target.value)
  }
  const onCancel = ()=>{
    setOpenModal(false);
  }
  const onSubmit = (event)=>{
    event.preventDefault();
    addTodo(newTodoValue)
    setOpenModal(false);
  }

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo TODO</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder='Tarea a realizar'
      />
      <div className="btn-conteiner">
        <button className="TodoForm-button TodoForm-button--cancel" id="cancelar" onClick={onCancel}>Cancelar</button>
        <button className="TodoForm-button TodoForm-button--add" id="agregar" type='submit'>Añadir</button>
      </div>
    </form>
  )
}

export { TodoForm }