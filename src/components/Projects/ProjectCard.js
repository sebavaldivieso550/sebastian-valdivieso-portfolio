import React from 'react';
import styles from './Projects.module.css';

function ProjectCard({ project }) {
    
    return (
        <div className={styles.projectCard}>
            <img
                src={project.image}
                alt={`Ìmagen del proyecto ${project.title}`}
                className={styles.projectImage}
            />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className={styles.projectLinks}>
                {project.liveLink && <a href={project.liveLink} target="_blank" rel="noopener noreferrer">Ver Proyecto</a>}
                {project.repoLink && <a href={project.repoLink} terget="_blank" rel="noopener noreferrer">Ver Código</a>}
            </div>
        </div>
    );
}

export default ProjectCard;