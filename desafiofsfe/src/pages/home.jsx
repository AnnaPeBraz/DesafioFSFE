import React from "react";
import styles from "../styles/home.module.css"
import ButtonLink from "../components/buttonLink";


function Home(){
    return(
        <section className={styles.home_container}>
            <h1>Bem vindo!</h1>
            <p>Como gostaria de seguir?</p>
            <ButtonLink to="/cadastrarEmpresa" text="Cadastrar Empresa"/>
            <ButtonLink to="/cadastrarFornecedor" text="Cadastrar Fornecedor"/>
            <ButtonLink to="/consultarCadastro" text="Consultar Cadastros" />
        </section>
    )
}

export default Home;