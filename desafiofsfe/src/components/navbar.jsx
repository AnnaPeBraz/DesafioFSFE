import { Link } from "react-router-dom";
import React from "react";
import style from "./styles/navbar.module.css";
import Container from "./container";

function NavBar () {
    return(
        <div className={style.navbar_container}>
            <nav>
                <Container>
                    <Link to="/" className={style.list}> Home </Link>
                    <Link to="/cadastrarEmpresa" className={style.list}> Empresa </Link>
                </Container>
            </nav>
        </div>
    )
}

export default NavBar;