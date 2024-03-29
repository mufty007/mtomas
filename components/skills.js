// Imports
import { tools } from '../tools'
import SkillsCard from './skillCard.js'

// Styles
import styles from './skills.module.css'

export default function Skills({ tool }){ 

    return(
        <div className={styles.heroContainer} id="tools" >
            <p className={styles.sectionTitle}>Tools & Technologies</p>
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


