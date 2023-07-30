import React, { useState } from "react";

function Consulta(){

    const [cadastro, setCadastro] = useState([
        {
            cnpj: 1,
            name: "Falatu webcomics",
            cep: 122,
        },
        {
            cnpj: 2,
            name: "ouvetu webcomics",
            cep: 369,
        },
    ])

    return(
        <div>
            <h1>Consultar Cadastro</h1>
            <h2>CNPJ, nome, CEP</h2>
            <div>
                {cadastro.map((cadastro => (
                    <div className="cadastros">
                        <div className="cnpj">
                            <p>{cadastro.cnpj}</p>
                        </div>
                        <div className="name">
                            <p>{cadastro.name}</p>
                        </div>
                        <div className="cep">
                            <p>{cadastro.cep}</p>
                        </div>
                        <button> Editar </button>
                        <button> Excluir </button>
                            <p>---</p>
                            
                    </div>
                )))}
            </div>

        </div>
    )
}

export default Consulta;