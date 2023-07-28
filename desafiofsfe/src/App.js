import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import React from "react";
import Home from './components/home';
import CadastrarEmpresa from './components/cadastrarEmpresa';
import NavBar from './components/navbar';

function App() {
  return (
    <Router>
      <NavBar/>

      <Routes>

        <Route exact path="/" element={<Home/>}/>
        <Route path='/cadastrarEmpresa' element={<CadastrarEmpresa/>}/>
        
      </Routes>

    </Router>
    
  )
}

export default App;
