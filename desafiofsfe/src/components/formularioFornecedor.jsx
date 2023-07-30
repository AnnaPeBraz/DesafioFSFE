import React from "react";
import Input from "./Input";
import SubmitButton from "./buttonSubmit";

function FormCadastroFornecedor(){
    return (
        <form >
            <Input
                type="text"
                text="Insira o CNPJ ou CPF"
                name="documento"
                placeholder="CNPJ ou CPF"
            />
            <Input
                type="text"
                text="Insira o Nome"
                name="Nome"
                placeholder="Nome Fantasia"
            />
            <Input
                type="text"
                text="Insira o email"
                name="email"
                placeholder="Email"
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

export default FormCadastroFornecedor;