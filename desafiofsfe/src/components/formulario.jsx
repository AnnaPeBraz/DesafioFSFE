import React from "react";
import Input from "./Input";
import SubmitButton from "./buttonSubmit";
// import InputMask from "react-input-mask";
import style from "../styles/customClass.module.css";

function FormCadastroEmpresa(){
    return (
        <form className={style.form}>
            <Input
                type="text"
                text="Insira o CNPJ"
                name="CNPJ"
                placeholder="CNPJ"
            />
            <Input
                type="text"
                text="Insira o Nome Fantasia"
                name="Nome"
                placeholder="Nome Fantasia"
            />
            <Input
                type="text"
                text="Insira o CEP"
                name="CEP"
                placeholder="CEP"
            />

            <SubmitButton text="entrar"/>

            {/* <InputMask 
                mask="99.999.999/9999-99" 
                value={value} 
                onChange={onChange}
            /> */}
            
        </form>
    )
}

export default FormCadastroEmpresa;