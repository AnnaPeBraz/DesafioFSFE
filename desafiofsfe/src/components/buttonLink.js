import { Link } from "react-router-dom";
import style from "./styles/buttonLink.module.css";
import React from "react";

function ButtonLink ({ to, text }){
    return (
        <Link className={style.btn_container} to={to}>
            {text}
        </Link>
    )
}

export default ButtonLink;