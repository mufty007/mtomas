// Imports
import ProcessItem from './processItem';
import { process } from '../process'
import { FiArrowUpRight } from "react-icons/fi";

// Styles
import styles from './process.module.css'
import RectButton from './RectButton'

export const getStaticProps = async () => {
    return {
        props: {
            project: projects,
        }
    }
}


export default function Process({ project }){ 

    return(
        <div className={styles.heroContainer} id="process">
            <p className={styles.sectionTitle}>My process</p>
            <hr className={styles.line}></hr>
            
            <div className={styles.process}>
                <div className={styles.right}>
                    <h2>
                        <span>Impossible</span><br></br>
                        is not part of <br></br>my vocabulary
                    </h2>

                    <RectButton>
                        <p>start a project</p>
                        <FiArrowUpRight size="1.25em"/>
                    </RectButton>
                </div>
                <div className={styles.left}>
                    <div className={styles.listItem}>
                        {
                            process && process.map((process) => (
                                <ProcessItem key={process.id} {...process}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>    
    )
}


