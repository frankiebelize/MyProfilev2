import { Navbar } from './componets/Navbar/Navbar'
import styles from'./App.module.CSS'
import { Hero } from './componets/Hero/hero'
import {About} from './componets/About/about'
import {Skill} from './componets/Skills/skills'
import {Project} from './componets/Project/project'
import {Contact} from './componets/Contact/contact'

function App() {
  

  return <div className={styles.App}>
    <Navbar/>
    <Hero/>
    <About/>
    <Skill/>
    <Project/>
    <Contact/>
    </div>
    
  
}

export default App
