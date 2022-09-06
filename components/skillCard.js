// Imports

// Styles
import styles from './skills.module.css'
import 'animate.css'



const SkillsCard = ({ id, title, icon, description, skills}) => (
    <div className={styles.skill} key={id}>
        <div className={styles.top}>
            <div className={styles.iconBox}>
                {icon}
            </div>
            <h2 className={styles.title}>{title}</h2>
        </div>
        <p className={styles.desc}>{description}</p>
        <div className={styles.skillsList}>
            <div className={styles.skillItems}>
                {
                    skills && skills.map(skills => (
                        <div key={skills.id} className={styles.skillItem}>
                            <div className={styles.iconBox}>{skills.skillIcon}</div>
                            <p>{skills.skillname}</p>
                        </div>
                    ))
                }
                
             </div>
        </div>
    </div> 
)

export default SkillsCard;
