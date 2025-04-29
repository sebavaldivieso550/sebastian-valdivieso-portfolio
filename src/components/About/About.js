import React from 'react';
import styles from './About.module.css';

function About() {
    return(
        <section id="about" className={styles.about}>
            <div className={styles.container}>
                <h2>Sobre mi</h2>
                <p>Aqui deberia escribir un parrafo sobre mi experiencia, habilidades, intereses y lo que busco como desarrollador de React.</p>
            </div>
        </section>
    );
}

export default About;