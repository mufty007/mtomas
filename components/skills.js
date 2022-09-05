// Imports
import { tools } from '../tools'
import SkillsCard from './skillCard.js'

// Styles
import styles from './skills.module.css'

export default function Skills({ tool }){ 

    return(
        <div className={styles.heroContainer} id="work" >
            <p className={styles.sectionTitle}>Selected projects</p>
            <hr className={styles.line}></hr>
            
            <div className={styles.Skills}>
                {
                    tools && tools.map((tools) => (
                        <SkillsCard key={tools.id} {...tools}/>
                    ))
                }
            </div>
        </div>    
    )
}


