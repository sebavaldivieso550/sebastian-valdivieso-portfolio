import React from 'react';
import styles from './Footer.module.css';

function Footer() {

    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <p>&copy; {currentYear} Sebastian Valdivieso. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}

export default Footer;