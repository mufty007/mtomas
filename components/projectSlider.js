// Imports 
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import Projects from '../projects.json'

// Styles
import styles from './projectSlider.module.css'
import RectButton from './rectButton'
import 'swiper/css';

import RegentParks from '../assests/images/regenrparks.png'

export default function projectSlider({props}){

    return (
            <Swiper
                slidesPerView={"auto"}
                spaceBetween={-100}
                grabCursor={true}
                breakpoints={{
                    960:{
                        spaceBetween: -50,
                    },
                    600:{
                        spaceBetween: -50,
                    },
                    400:{
                        spaceBetween: -10,
                    }
                }}
                className={styles.swiper}
            >
                {Projects && Projects.map(project => (
                    <SwiperSlide key={project.id}>
                        <div className={styles.project}>
                            <div className={styles.projectInfo}>
                                <div className={styles.projectInfoTop}>
                                    <h2 className={styles.projectTitle}>{project.title}</h2>
                                        {project.tags && project.tags.map((tag, index) => {
                                            return (
                                                <ul className={styles.projectTags} key={project.id}>
                                                    <li>{tag}</li>
                                                </ul>    
                                            )
                                                
                                        })}
                                        
                                    <p className={styles.projectDescription}>
                                        <a href="#" target="_black">{project.title}</a> {project.description}
                                    </p>
                                </div>
                                <div>
                                    <RectButton className={styles.btn} onClick={() => console.log("Clicked")} children={["view case study", <span className={styles.arrows}>&#x2197;</span>]}/>
                                </div>
                            </div>
                            <div className={styles.projectImg}>
                            <div className={styles.image}>
                                <img src={project.imageUrl} className={styles.img}>
                                </img>
                                {/* <Image 
                                        src={project.imageUrl}
                                        alt="Picture of the author"
                                        layout='res'
                                        className={styles.image}
                                    /> */}
                            </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
   
            </Swiper>
        
    )
}

