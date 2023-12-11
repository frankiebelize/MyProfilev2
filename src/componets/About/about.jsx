import React from "react";
import { getImageUrl } from "../../utils";
import Styles from "../../componets/About/about.module.CSS"

export const About = () => {
    return (
        <section className={Styles.container} id="about">
            <h2 className={Styles.title}>About</h2>
            <div className={Styles.content}>
                <img className={Styles.aboutImg} src={getImageUrl("about/aboutImg.png")} alt="about picture"/>
                <ul className={Styles.aboutItems }>
                    <li className={Styles.aboutItem}>
                        <img src={getImageUrl("about/frontEndIcon.png")} alt="cursor img"/>
                    <div className={Styles.aboutItemText}>
                        <h3>Front End Developer</h3>
                        <p>I am a Front End Developer with expirence in building attractive, responsive
                            and optimized webpages
                        </p>
                    </div>
                    </li>
                    <li className={Styles.aboutItem}>
                        <img src={getImageUrl("about/backEndIcon.png")} alt="cursor img"/>
                    <div className={Styles.aboutItemText}>
                        <h3>Back End Developer</h3>
                        <p>I am a Back End Developer with expirence in building fast, effiecent and reliable back end systems.
                        </p>
                    </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}