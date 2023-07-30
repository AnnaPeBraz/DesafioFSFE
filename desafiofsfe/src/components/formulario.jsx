import React, { useState } from "react";
import Input from "./Input";
import SubmitButton from "./buttonSubmit";
// import InputMask from "react-input-mask";
import style from "../styles/customClass.module.css";

function FormCadastroEmpresa(){
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(cnpj, namef, cep);
    };

    const [cnpj, setCnpj] = useState([]);
    const [namef, setNamef] = useState([]);
    const [cep, setCep] = useState([]);

    return (
        <form className={style.form} onSubmit={handleSubmit}>
            <Input
                type="text"
                text="Insira o CNPJ"
                name="CNPJ"
                placeholder="CNPJ"
                onchange={(e) => setCnpj(e.target.cnpj)}
            />
            <Input
                type="text"
                text="Insira o Nome Fantasia"
                // name="Nome"
                placeholder="Nome Fantasia"
                onchange={(e) => setNamef(e.target.namef)}

            />
            <Input
                type="text"
                text="Insira o CEP"
                name="CEP"
                placeholder="CEP"
                onchange={(e) => setCep(e.target.cep)}

            />

            <SubmitButton text="Entrar informações"/>

            {/* <InputMask 
                mask="99.999.999/9999-99" 
                value={value} 
                onChange={onChange}
            /> */}
            
        </form>
    )
}

export default FormCadastroEmpresa;