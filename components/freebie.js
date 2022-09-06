// Imports

import FreebieCard from './freebieCard'
import RectButton from './RectButton'
import { FiArrowUpRight, FiFigma } from "react-icons/fi";

import { freebies } from '../free'

// Styles
import styles from './free.module.css'

export default function Freebies({}){ 

    return(
        <div className={styles.heroContainer} id="work" >
            <p className={styles.sectionTitle}>figma freebies</p>
            <hr className={styles.line}></hr>
            
            <div className={styles.freebies}>
            <div className={styles.right}>
                    <h2>
                        <span>Freebies</span><br></br>
                        for creatives <br></br>to use
                    </h2>

                    <RectButton>
                        <FiFigma size="1.25em"/>
                        <p>view all on figma community</p>
                        <FiArrowUpRight size="1.25em"/>
                    </RectButton>
                </div>
                <div styles={styles.left}>
                {
                    freebies && freebies.map(freebies => (
                        <FreebieCard key={freebies.id} {...freebies} />
                    ))
                }
                </div>
                
            </div>
        </div>    
    )
}


