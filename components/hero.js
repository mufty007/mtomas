// Imports
import Image from 'next/image'

// Styles
import styles from './hero.module.css'
import 'animate.css'

// image
import HeroImage from '../assests/images/heroImage.jpg'
import Button from './button'

export default function Hero(){ 

    return(
        <div className={styles.heroContainer}>
            <div className={styles.heroContent}>
                <h1 className="animate__animated animate__fadeInUp">From Idea to Product, using the power of Design & Code to build Interactive UI for small businesses and spcoming startups.</h1>
                <p className="animate__animated animate__fadeInUp animate__delay-1s">Hi there, I’m Muhammad Tomasiewicz, a Polish-Nigerian based in Indianapolis, IN. I’m UI/UX designer & front end web developer. I conbine the modern technologies with visual aesthetic to make a stuning yet useful product.</p>
            </div>
            <div className={`${styles.heroImage} animate__animated animate__fadeIn animate__delay-2s`}>
                
                <Image
                    src={HeroImage}
                    alt="Hero Image"
                    layout='fill'
                /> 
                <div className={styles.overlay}>
                    <Button onClick={() => console.log("Clicked")} children="view work"/>
                </div>
            </div>
        </div>    
    )
}