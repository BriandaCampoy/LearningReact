import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import AddPage from './AddPage/AddPage';
import EditPage from './EditPage/EditPage';
import Home from './home/HomePage';


function App() {
  return (
   <HashRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/add" element={<AddPage/>}/>
      <Route path="/edit/:id" element={<EditPage/>}/>
    </Routes>
   </HashRouter>
  );
}

export default App;
