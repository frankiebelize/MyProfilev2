import { Navbar } from './componets/Navbar/Navbar'
import styles from'./App.module.CSS'
import { Hero } from './componets/Hero/hero'

function App() {
  

  return <div className={styles.App}>
    <Navbar/>
    <Hero/>
    </div>
    
  
}

export default App
