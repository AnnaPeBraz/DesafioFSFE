import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import React from "react";
import Home from './components/pages/home';
import CadastrarEmpresa from './components/pages/cadastrarEmpresa';
import NavBar from './components/navbar';
import CadastrarFornecedor from './components/pages/cadastrarFornecedor';
import Consulta from './components/pages/consultarCadastro';


function App() {
  return (
    <Router>
      <NavBar/>

      <Routes>

        <Route exact path="/" element={<Home/>}/>
        <Route path='/cadastrarEmpresa' element={<CadastrarEmpresa/>}/>
        <Route path='/cadastrarFornecedor' element={<CadastrarFornecedor/>}/>
        <Route path='/consultarCadastro' element={<Consulta/>}/>      
      </Routes>

    </Router>
    
  )
}

export default App;
