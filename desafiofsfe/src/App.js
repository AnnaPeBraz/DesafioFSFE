import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import React from "react";
import Home from './pages/home';
import CadastrarEmpresa from './pages/cadastrarEmpresa';
import NavBar from './components/navbar';
import CadastrarFornecedor from './pages/cadastrarFornecedor';
import Consulta from './pages/consultarCadastro';


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
