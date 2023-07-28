import { Link } from "react-router-dom";
import React from "react";

function NavBar () {
    return(
        <div>
            <nav>
                <Link to="/"> Home </Link>
                <Link to="/cadastrarEmpresa"> Empresa </Link>
            </nav>
        </div>
    )
}

export default NavBar;