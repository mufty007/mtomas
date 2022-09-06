import 'animate.css'

// Styles
import styles from './rectButton.module.css'

export default function RectButton({onClick, children}){

    return(
        <button onClick={onClick} href={children} target="_BLANK" className={styles.button}>{children}</button>
    )
}