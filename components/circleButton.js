import 'animate.css'

// Styles
import styles from './circleButton.module.css'

export default function CircleButton({onClick, children}){

    // if(process.browser){
    //     const btn = window.document.querySelector('.btn');

    //     btn.addEventListener('mousemove', (e) => {
    //         const position = btn.getBoundingClientRect()
    //         const x = e.pageX - position.left - position.width / 2
    //         const y = e.pageY - position.top - position.height / 2

    //         btn.style.transform = "translate("+x*0.3+"px, "+y*0.5+"px)"
    //     })

    //     btn.addEventListener("mouseout", (e) => {
    //         btn.style.transform = "translate(0px, 0px)"
    //     })
    // }

    return(
        <button onClick={onClick} className={`${styles.button} btn animate__animated animate__zoomIn animate__delay-2s`}>{children}</button>
    )
}