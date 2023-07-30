import React from "react";
import style from "./styles/buttonLink.module.css"

function SubmitButton ( {text} ) {
    return (
        <div>
            <button className={style.btn_container}>{text}</button>
        </div>
    )
}

export default SubmitButton;