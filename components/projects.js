// Imports
import Projects from '../projects.json'

// Styles
import styles from './projects.module.css'

export default function projectCards(){ 

    return(
        <div className={styles.heroContainer}>
            <p className={styles.sectionTitle}>Selected projects</p>
            <hr className={styles.line}></hr>

            <div className={styles.Projects}>
                {Projects && Projects.map( project => {
                    return(
                        <div className={styles.project} key={project.id}>
                            <div className={styles.projectImage}></div>
                            <div className={styles.projectInfo}>
                                <div className={styles.projectInfoTop}>
                                    <ul>
                                        <li>ui design</li>
                                    </ul>
                                    <div className={styles.year}>2022</div>
                                </div>
                                <div className={styles.projectInfoBottom}>
                                    <h2>{project.name}</h2>
                                </div>
                            </div>
                        </div>    
                    )
                })}
                
            </div>
        </div>    
    )
}