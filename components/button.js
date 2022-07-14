import 'animate.css'

// Styles
import styles from './button.module.css'

export default function Button({onClick, children}){
    return(
        <button onClick={onClick} className={`${styles.button} animate__animated animate__zoomIn animate__delay-2s`}>{children}</button>
    )
}