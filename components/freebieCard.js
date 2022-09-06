// Imports
import RectButton from './RectButton'
import { FiArrowUpRight} from "react-icons/fi"

// Styles
import styles from './free.module.css'
import 'animate.css'


const FreebieCard = ({ id, title, description, duplicates, website}) => (
    <div className={styles.freebie} key={id} id={title}>
            <div className={styles.freebieImg}></div>
            <div className={styles.freebieInfo}>
                <p>{duplicates} duplicates</p>
                <h4>{title}</h4>
                <p>{description}</p>
                <RectButton href={website}>
                    <p>duplicate on figma</p>
                    <FiArrowUpRight size="1.25em"/>
                </RectButton>
            </div>
        </div>
)

export default FreebieCard;
