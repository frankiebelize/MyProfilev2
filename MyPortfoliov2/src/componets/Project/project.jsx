import React from "react";
import projects from '../../data/projects.json';
import style from './project.module.css';
import { getImageUrl } from "../../utils";
import { Skill } from "../Skills/skills";

export const Project = () => {
    return (
        <section className={style.container} id="projects">
            <h2 className={style.title}>Projects</h2>
            <div className={style.content}>{
                projects.map((project ,id) => {
                    return (
                        <div key={id} className={style.cardcontainer} >
                        <img src={getImageUrl(project.imageSrc)} alt={`${project.title}`} className={style.cardimg}/>
                        <h3 className={style.title}>{project.title}</h3>
                        <p className={style.carddescription}>{project.description}</p>
                        <ul className={style.cardskills}>
                        {
                            project.skills.map((skill, id) => {
                                <li key={id} className={style.cardskill}>
                                    {skill}
                                </li>
                            }) 
                        }
                
                        </ul>
                    
                    <div className={style.cardlinks}>
                    <a href={project.demo} className={style.cardlinks}>Demo</a>
                    <a href={project.source} className={style.cardlinks}>Source</a>
                </div>
                </div>
                    )
                    
                })}
                
            </div>
        </section>
    )
}