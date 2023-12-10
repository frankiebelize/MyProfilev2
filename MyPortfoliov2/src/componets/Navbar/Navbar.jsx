import React, {useState} from "react";
import styles from "./navbar.module.CSS";
import {getImageUrl} from "../../utils";

export const Navbar = () => {
    const {menuOpen, SetMenuOpen} = useState(false);
    return ( 
    <nav className={styles.navbar}>
        <a className={styles.title} href="/">Portfolio</a>
    <div className={styles.menu}>
        <img className={styles.menuBtn} 
        src={menuOpen ?
        getImageUrl("nav/closeIcon.png") :
        getImageUrl("nav/menuIcon.png")}
        onClick={() => SetMenuOpen(!menuOpen)}/>
       <ul
        className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
       onClick={() => SetMenuOpen(false)}
       >
            <li>
                <a href="#about">About</a>
            </li>
            <li>
                <a href="#skills">Skills</a>
            </li>
            <li>
                <a href="#Projects">Porjects</a>
            </li>
            <li>
                <a href="#contact">Contact Me</a>
            </li>
        </ul> 
    </div>
    </nav>
    )
};