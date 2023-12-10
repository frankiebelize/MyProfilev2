import React from "react";
import { getImageUrl } from "../../utils";
import style from './projectCard.module.css';

export const ProjectCard = ({project: {title, imageSrc, description, skills, demo, source}}) => {
    return (
    <div className={style.container} >
        <img src={getImageUrl(imageSrc)} alt={`${project.title}`} className={style.img}/>
        <h3 className={style.title}>{title}</h3>
        <p className={style.description}>{description}</p>
        <ul className={style.skills}>
        {skills.map((skill, id) => {
            console.log(skill);
       return <li key={id} className={style.skill}>{skill}</li>
        })}

        </ul>
    
    <div className={style.links}>
    <a href={demo} className={style.links}>Demo</a>
    <a href={source} className={style.links}>Source</a>
</div>
</div>);
};