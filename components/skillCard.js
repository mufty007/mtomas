// Imports

// Styles
import styles from './skills.module.css'
import 'animate.css'


const SkillsCard = ({ id, title, icon, description, skills:{skillName, skillIcon}}) => (
    <div className={styles.skill} key={id}>
        <div className={styles.top}>
            <div className={styles.iconBox}>
                {icon}
            </div>
            <h2 className={styles.title}>{title}</h2>
        </div>
        <p>{description}</p>
        <div className={styles.skillsList}>
            {
                skills && skills.map((skills) => (
                    <div key={skills.id}>
                        <p>{skills.skillName}</p>
                    </div>
                ))
            }
        </div>
    </div> 
)

export default SkillsCard;
