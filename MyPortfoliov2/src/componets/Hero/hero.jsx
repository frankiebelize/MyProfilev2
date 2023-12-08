import React from "react";
import Styles from "./Hero.module.CSS"
import {getImageUrl} from "../../utils";

export const Hero = () => {
    return (
    <section className={Styles.container}>
        <div className={Styles.content}>
            <h1 className={Styles.title}>Hi, I'm Franco</h1>
            <p className={Styles.description}>I'm a MERN stack developer with experience in other programming languages such as C++ and mysql </p>
            <a href="mailto:frankiebelize@gmail.com" className={Styles.contactBtn}>Contact Me</a>

        
        </div>

        <img src={getImageUrl("hero/heroImg.png")} alt="Hero" className={Styles.heroImg}/>
        <div className={Styles.topBlur}/> 
        <div className={Styles.bottomBlur}/>
    </section>
)}