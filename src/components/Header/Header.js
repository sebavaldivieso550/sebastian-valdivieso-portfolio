import React from 'react';
import styles from './Header.module.css';
import perfilPlaceholder from '../../assets/perfil-placeholder.jpg';

function Header() {
    return(
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.profile}>
                    <img 
                        src={perfilPlaceholder}
                        alt="Foto de perfil de Sebastian Valdivieso"
                        className={styles.profileImage}
                    />
                    <h1>Sebastian Valdivieso</h1>
                    <p>Desarrollador React</p>
                </div>
            </div>
        </header>
    );
}

export default Header;