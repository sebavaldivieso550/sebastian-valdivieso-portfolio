import React from 'react';
import styles from './Contact.module.css';

function Contact() {

    return (
        <section id="contact" className={styles.contact}>
            <div className={styles.container}>
                <h2>Contacto</h2>
                <p>Puedes contactarme a través de:</p>
                <ul>
                    <li>
                        Email: <a href="sebavaldivieso550@gmail.com">sebavaldivieso550@gmail.com</a>
                    </li>
                    <li>
                        LinkedIn: <a href="https://www.linkedin.com/in/sebastián-valdivieso/" target="_blank" rel="noopener noreferrer">linkedin.com/in/sebastián-valdivieso/</a>
                    </li>
                    <li>
                        GitHub: <a href="https://github.com/sebavaldivieso550" target="_blank" rel="noopener noreferrer">github.com/sebavaldivieso550</a>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Contact;