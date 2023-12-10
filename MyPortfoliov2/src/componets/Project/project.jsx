import React from "react";
import projects from '../../data/projects.json';
import style from './project.module.css';

import { ProjectCard } from "./projectCard";
export const Project = () => {
    return (
        <section className={style.container} id="projects">
            <h2 className={style.title}>Projects</h2>
            <div className={style.projects}>{
                projects.map((project ,id) => {
                    return (
                        <ProjectCard key={id} project={project}/>
                    )
                    
                })}
                
            </div>
        </section>
    )
}