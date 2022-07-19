// Imports 
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import fsPromises from 'fs/promises'
import path from 'path'

// Styles
import styles from './projectSlider.module.css'
import RectButton from './rectButton'
import 'swiper/css';

import RegentParks from '../assests/images/regenrparks.png'

export async function getStaticProps(){
    const filePath = path.join(process.cwd(), 'projects.json')

    const jsonData = await fsPromises.readFile(filePath)

    const objectData = JSON.parse(jsonData)

    return {
        props: objectData
    }
}

export default function projectSlider(){
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
                <SwiperSlide>
                    <div className={styles.project}>
                        <div className={styles.projectInfo}>
                            <div className={styles.projectInfoTop}>
                                <h2 className={styles.projectTitle}>Regent-Parks</h2>
                                <ul className={styles.projectTags}>
                                    <li>UI Design</li>
                                    <li>web design & Development</li>
                                </ul>
                                <p className={styles.projectDescription}>
                                    <a href="#" target="_black">regent-parks</a> is an associate-first employment firm with a straightforward success formula.
                                </p>
                            </div>
                            <div>
                                <RectButton className={styles.btn} onClick={() => console.log("Clicked")} children={["view case study", <span className={styles.arrows}>&#x2197;</span>]}/>
                            </div>
                        </div>
                        <div className={styles.projectImg}>
                        <div className={styles.image}>
                            <Image 
                                    src={RegentParks}
                                    alt="Picture of the author"
                                    layout='responsive'
                                    className={styles.image}
                                />
                        </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.project}>
                        <div className={styles.projectInfo}>
                            <div className={styles.projectInfoTop}>
                                <h2 className={styles.projectTitle}>Regent-Parks</h2>
                                <ul className={styles.projectTags}>
                                    <li>UI Design</li>
                                    <li>web design & Development</li>
                                </ul>
                                <p className={styles.projectDescription}>
                                    <a href="#" target="_black">regent-parks</a> is an associate-first employment firm with a straightforward success formula.
                                </p>
                            </div>
                            <div>
                                <RectButton className={styles.btn} onClick={() => console.log("Clicked")} children={["view case study", <span className={styles.arrows}>&#x2197;</span>]}/>
                            </div>
                        </div>
                        <div className={styles.projectImg}>
                        <div className={styles.image}>
                            <Image 
                                    src={RegentParks}
                                    alt="Picture of the author"
                                    layout='responsive'
                                    className={styles.image}
                                />
                        </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.project}>
                        <div className={styles.projectInfo}>
                            <div className={styles.projectInfoTop}>
                                <h2 className={styles.projectTitle}>Regent-Parks</h2>
                                <ul className={styles.projectTags}>
                                    <li>UI Design</li>
                                    <li>web design & Development</li>
                                </ul>
                                <p className={styles.projectDescription}>
                                    <a href="#" target="_black">regent-parks</a> is an associate-first employment firm with a straightforward success formula.
                                </p>
                            </div>
                            <div>
                                <RectButton className={styles.btn} onClick={() => console.log("Clicked")} children={["view case study", <span className={styles.arrows}>&#x2197;</span>]}/>
                            </div>
                        </div>
                        <div className={styles.projectImg}>
                        <div className={styles.image}>
                            <Image 
                                    src={RegentParks}
                                    alt="Picture of the author"
                                    layout='responsive'
                                    className={styles.image}
                                />
                        </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.project}>
                        <div className={styles.projectInfo}>
                            <div className={styles.projectInfoTop}>
                                <h2 className={styles.projectTitle}>Regent-Parks</h2>
                                <ul className={styles.projectTags}>
                                    <li>UI Design</li>
                                    <li>web design & Development</li>
                                </ul>
                                <p className={styles.projectDescription}>
                                    <a href="#" target="_black">regent-parks</a> is an associate-first employment firm with a straightforward success formula.
                                </p>
                            </div>
                            <div>
                                <RectButton className={styles.btn} onClick={() => console.log("Clicked")} children={["view case study", <span className={styles.arrows}>&#x2197;</span>]}/>
                            </div>
                        </div>
                        <div className={styles.projectImg}>
                        <div className={styles.image}>
                            <Image 
                                    src={RegentParks}
                                    alt="Picture of the author"
                                    layout='responsive'
                                    className={styles.image}
                                />
                        </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.project}>
                        <div className={styles.projectInfo}>
                            <div className={styles.projectInfoTop}>
                                <h2 className={styles.projectTitle}>Regent-Parks</h2>
                                <ul className={styles.projectTags}>
                                    <li>UI Design</li>
                                    <li>web design & Development</li>
                                </ul>
                                <p className={styles.projectDescription}>
                                    <a href="#" target="_black">regent-parks</a> is an associate-first employment firm with a straightforward success formula.
                                </p>
                            </div>
                            <div>
                                <RectButton className={styles.btn} onClick={() => console.log("Clicked")} children={["view case study", <span className={styles.arrows}>&#x2197;</span>]}/>
                            </div>
                        </div>
                        <div className={styles.projectImg}>
                        <div className={styles.image}>
                            <Image 
                                    src={RegentParks}
                                    alt="Picture of the author"
                                    layout='responsive'
                                    className={styles.image}
                                />
                        </div>
                        </div>
                    </div>
                </SwiperSlide>
                
   
            </Swiper>
        
    )
}

