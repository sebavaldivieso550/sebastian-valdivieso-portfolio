import React from 'react';
import styles from './ThemeToggle.module.css';
import { BsSun, BsMoon } from 'react-icons/bs';

function ThemeToggle({ theme, toggleTheme }) {

    return (
        <button
            className={styles.themeToggleButton}
            onClick={toggleTheme}
            aria-label={theme === 'light' ? 'Cambiar a tema oscuro' : 'Cambiar a tema claro'}
            title={theme === 'light' ? 'Cambiar a tema oscuro' : 'Cambiar a tema claro'}
        >
            {theme === 'light' ? <BsMoon size={20} /> : <BsSun size={20} />}
        </button>
    );
}

export default ThemeToggle;