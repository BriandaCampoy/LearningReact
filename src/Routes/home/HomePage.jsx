import React from 'react';
import { useNavigate } from 'react-router-dom';
import {useTodos} from '../useTodos';
import { TodoHeader } from '../../IU/TodoHeader/TodoHeader';
import { TodoCounter } from '../../IU/TodoCounter/TodoCounter';
import { TodoSearch } from '../../IU/TodoSearch/TodoSearch';
import { TodoList } from '../../IU/TodoList/TodoList';
import { TodoItem } from '../../IU/TodoItem/TodoItem';
import { TodosError } from '../../IU/TodosError/TodosError';
import { TodosLoading } from '../../IU/TodosLoading/TodosLoading';
import { EmptyTodos } from '../../IU/EmptyTodos/EmptyTodos';
import { TodoForm } from '../../IU/TodoForm/TodoForm';
import { CreateTodoButton } from '../../IU/CreateTodoButton/CreateTodoButton';
import { Modal } from '../../IU/Modal/Modal';
import {ChangeAlert} from '../../IU/ChangeAlert/index';



function Home() {
  const navigate = useNavigate();
  const {
    states, updaters
  } = useTodos();

  const {
    loading,
    error,
    totalTodos,
    completedTodos,
    searchValue,
    searchedTodos,
    todosBruto,
    openModal
  }= states;

  const {
    setSearchValue,
    addTodo,
    completeTodo, 
    deleteTodo,
    setOpenModal,
    sincronizeTodos,
  }=updaters;
  return (
    <React.Fragment>
      <TodoHeader loading={loading}>
          <TodoCounter
            totalTodos={totalTodos}
            completedTodos={completedTodos}
          />
          <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
      </TodoHeader>
      <TodoList
        error = {error}
        loading={loading}
        searchedTodos = {searchedTodos}
        totalTodos = {todosBruto}
        searchText = {searchValue}
        onError={()=> <TodosError/>}
        onLoading={()=> <TodosLoading/>}
        onEmpty={()=> <EmptyTodos/>}
        onEmptyResults={
          (searchText) => <p>No hay resultados para {searchText}</p> }
        render={todo=>(
          <TodoItem
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.id)}
            onDelete={() => deleteTodo(todo.id)}
            onEdit={()=> navigate(
              `edit/${todo.id}`,
               {
                state: {todo}
               })}
          />
        )}
      >
        {/* {todo=>(
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
            />
        )} */}
      </TodoList>
        

      {/* <TodoList>
        {error && <TodosError />}
        {loading && <TodosLoading />}
        {(!loading && !searchedTodos.length) && <EmptyTodos />}
        
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList> */}

      {!!openModal && (
        <Modal>
          <TodoForm 
            addTodo={addTodo} 
            setOpenModal={setOpenModal}  />
        </Modal>
      )}

      <CreateTodoButton
        // sincronized = {sincronizeTodos}
        setOpenModal={setOpenModal}
      />
      <ChangeAlert 
        sincronize = {sincronizeTodos}
      />
    </React.Fragment>
  );
}

export default Home;
