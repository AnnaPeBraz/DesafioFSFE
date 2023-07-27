import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import React from "react";
import Home from './components/home';
import CadastrarEmpresa from './components/cadastrarEmpresa';

function App() {
  return (
    <Router>
      <div>
        <Link to="/cadastrarEmpresa"> Empresa </Link>
      </div>

      <Routes>

        <Route exact path="/" element={<Home/>}/>
        <Route path='/cadastrarEmpresa' element={<CadastrarEmpresa/>}/>
        
      </Routes>

    </Router>
    
  )
}

export default App;
