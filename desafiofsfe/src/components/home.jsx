import React from "react";
import styles from "./home.module.css"


function Home(){
    return(
        <section className={styles.home_container}>
            <h1>Bem vindo!</h1>
            <p>Como gostaria de seguir?</p>
        </section>
    )
}

export default Home;