// Imports

// Styles
import styles from './process.module.css'
import 'animate.css'


const ProcessItem = ({ id, title, description, icon}) => (
    <div className={`${title} ${styles.process}`} key={id} id={title}>
        <div className={styles.top}>
            <div className={styles.iconBox}>
                {icon}
            </div>
            <h3 className={styles.title}>{title}</h3>
        </div>
        <p>{description}</p>
    </div> 
)

export default ProcessItem;
