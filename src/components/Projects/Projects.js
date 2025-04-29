import React from 'react';
import ProjectCard from './ProjectCard';
import styles from './Projects.module.css';

function Projects() {
    
    const projectsList = [
        {
            title: 'Nombre del proyecto 1',
            description: 'Breve descripción del proyecto 1 y las tecnologías usadas.',
            image: 'url_o_ruta_imagen_proyecto1.png',
            liveLink: 'enlace_al_proyecto_1',
            repoLink: 'enlace_al_repositorio_github_1',
        },
        {
            title: 'Nombre del proyecto 2',
            description: 'Breve descripción del proyecto 2 y las tecnologías usadas.',
            image: 'url_o_ruta_imagen_proyecto2.png',
            liveLink: 'enlace_al_proyecto_2',
            repoLink: 'enlace_al_repositorio_github_2',
        },
        {
            title: 'Nombre del proyecto 3',
            description: 'Breve descripción del proyecto 3 y las tecnologías usadas.',
            image: 'url_o_ruta_imagen_proyecto3.png',
            liveLink: 'enlace_al_proyecto_3',
            repoLink: 'enlace_al_repositorio_github_3',
        },
    ];

    return (
        <section id="projects" className={styles.projects}>
            <div className={styles.container}>
                <h2>Proyectos</h2>
                <div className={styles.projectsGrid}>
                    {projectsList.map((project, index) => (
                        <ProjectCard
                            key={index}
                            project={project}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;