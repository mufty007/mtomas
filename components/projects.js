// Imports
import ProjectSlider from './projectSlider'

// Styles
import styles from './projects.module.css'

export default function Projects(){ 

    return(
        <div className={styles.heroContainer}>
            <p className={styles.sectionTitle}>Selected projects</p>
            <hr className={styles.line}></hr>
            <ProjectSlider/>
        </div>    
    )
}