import React from "react";
import style from "../styles/cadastrarEmpresa.module.css"
import FormCadastroEmpresa from "../formulario";
import ButtonLink from "../buttonLink";

function CadastrarEmpresa(){
    return(
        <div className={style.cadastro_container}>
            <h1>Cadastro de Empresa</h1>
            <p>Por favor preencha as informações a seguir:</p>
            <FormCadastroEmpresa />
            <ButtonLink to="/" text="Voltar"/>
        </div>
    )
}

export default CadastrarEmpresa;