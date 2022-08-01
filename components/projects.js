// Imports
import { projects } from '../projects'
import ProjectCard from './projectCard'

// Styles
import styles from './projects.module.css'

export const getStaticProps = async () => {
    return {
        props: {
            project: projects,
        }
    }
}


export default function Projects({ project }){ 

    return(
        <div className={styles.heroContainer}>
            <p className={styles.sectionTitle}>Selected projects</p>
            <hr className={styles.line}></hr>
            
        <div className={styles.Projects}>
            {
                projects && projects.map((projects) => (
                    <ProjectCard key={projects.id} {...projects}/>
                ))
            }
        </div>
        </div>    
    )
}


