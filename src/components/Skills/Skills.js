import React from 'react';
import styles from './Skills.module.css';

function Skills() {
    
    const skillsList = [
        'React',
        'JavaScript',
        'HTML5',
        'CSS3',
        'Node.js',
        'Express',
        'MongoDB',
        'Git',
        'Control de Versiones',
        'APIs RESTful',
    ];

    return (
        <section id="skills" className={styles.skills}>
            <div className={styles.container}>
                <h2>Habilidades</h2>
                <ul className={styles.skillsList}>
                    {skillsList.map((skill, index) => (
                        <li key={index} className={styles.skillItem}>
                            {skill}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default Skills;