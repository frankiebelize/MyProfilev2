import React from "react";
import skills from "../../data/skills.json";
import { getImageUrl } from "../../utils";
import styles from "../Skills/skills.module.CSS";

export const Skill = () => {
    return(
        <section className={styles.container} id="skills">
            <h2 className={styles.title}>Skills</h2>
            <div className={styles.content}>
                <div className={styles.skills}>
                    {skills.map((skill, id) => {
                    return (
                    <div key={id} className={styles.skill}>
                        <div className={styles.skillImgContainer}> <img src={getImageUrl(skill.imageSrc)} alt={skill.title}/></div>
                        <p>{skill.title}</p>
                        
                        </div>
                    );
                })
                }</div>
            </div>
        </section>
    )
}