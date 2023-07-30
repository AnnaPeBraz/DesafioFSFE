import React from "react";
import style from "../styles/cadastrarEmpresa.module.css"
import ButtonLink from "../components/buttonLink";
import FormCadastroFornecedor from "../components/formularioFornecedor";

function CadastrarFornecedor(){
    return(
        <div className={style.cadastro_container}>
            <h1>Cadastro de Fornecedor</h1>
            <p>Por favor preencha as informações a seguir:</p>
            <FormCadastroFornecedor />
            <ButtonLink to="/" text="Voltar"/>

        </div>
    )
}

export default CadastrarFornecedor;