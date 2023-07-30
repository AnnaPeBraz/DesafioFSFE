import React from "react";
import style from "../styles/form.module.css"


function Input ({ type, text, name, placeholder, value, onchange}){
    return(
        <div className={style.form_control}>
            <label htmlFor={name}>
                {text}:
            </label>
            <input 
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onchange}
            />
        </div>
    )
}

export default Input;