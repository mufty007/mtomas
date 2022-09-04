// Imports
import { projects } from '../projects'
import RectButton from './RectButton'
import ProjectCard from './projectCard'
import { RiBehanceLine, RiDribbbleFill } from "react-icons/ri";
import { FiArrowUpRight } from "react-icons/fi";

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
        <div className={styles.heroContainer} id="work">
            <p className={styles.sectionTitle}>Selected projects</p>
            <hr className={styles.line}></hr>
            
            <div className={styles.Projects}>
                {
                    projects && projects.map((projects) => (
                        <ProjectCard key={projects.id} {...projects}/>
                    ))
                }
            </div>
            <div className={styles.buttons}>
                <RectButton>
                    <RiDribbbleFill size="1.25em"/>
                    <p>more on dribble</p>
                    <FiArrowUpRight size="1.25em"/>
                </RectButton>
                <RectButton>
                    <RiBehanceLine size="1.25em"/>
                    <p>more on behance</p>
                    <FiArrowUpRight size="1.25em"/>
                </RectButton>
            </div>
        </div>    
    )
}


