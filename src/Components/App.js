// import logo from './logo.svg';
import React from 'react';
import { AppUI } from './AppUI';
import {TodoProvider} from './TodoContext';



function App() {
  // React.useEffect(()=>{
  //   console.log("USE effect")
  // },[totalTodos])

  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}

export default App;
