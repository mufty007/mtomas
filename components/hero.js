// Imports
import Image from 'next/image'
import CircleButton from './circleButton'

// Styles
import styles from './hero.module.css'
import 'animate.css'

// image
import HeroImage from '../assests/images/heroImage.jpg'


export default function Hero(){ 

    return(
        <div className={styles.heroContainer}>
            <div className={styles.heroContent}>
                <h1 className="animate__animated animate__fadeInUp">From Idea to Product, using the power of Design & Code to build Interactive UI for small businesses and spcoming startups.</h1>
            </div>
            <div className={`${styles.heroImage} animate__animated animate__fadeIn animate__delay-2s`}>
                
                <Image
                    src={HeroImage}
                    alt="Hero Image"
                    layout='fill'
                /> 
                <div className={styles.overlay}>
                    <CircleButton onClick={() => console.log("Clicked")} children="view work" />
                </div>
            </div>
        </div>    
    )
}