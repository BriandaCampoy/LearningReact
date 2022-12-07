import React from 'react';
import {useTodos} from './useTodos';
import { TodoHeader } from '../TodoHeader/TodoHeader';
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { TodosError } from '../TodosError/TodosError';
import { TodosLoading } from '../TodosLoading/TodosLoading';
import { EmptyTodos } from '../EmptyTodos/EmptyTodos';
import { TodoForm } from '../TodoForm/TodoForm';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';
import { Modal } from '../Modal/Modal';



function App() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    addTodo,
    todosBruto
  } = useTodos();

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
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
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
        setOpenModal={setOpenModal}
      />
    </React.Fragment>
  );
}

export default App;
