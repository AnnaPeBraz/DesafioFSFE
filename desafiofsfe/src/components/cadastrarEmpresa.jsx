import React from "react";
import style from "./styles/cadastrarEmpresa.module.css"
import FormCadastro from "./formulario";

function CadastrarEmpresa(){
    return(
        <div className={style.cadastro_container}>
            <h1>Cadastro de Empresa</h1>
            <p>Por favor preencha as informações a seguir:</p>
            <FormCadastro />
        </div>
    )
}

export default CadastrarEmpresa;