// Imports
import Image from 'next/image'

// Styles
import styles from './projects.module.css'
import 'animate.css'


const ProjectCard = ({ id, title, year, website, tags, imageUrl }) => (
    <div className={`${title} ${styles.project}`} key={id} id={title}>
        <div className={`${styles.projectInfoTop} animate__animated animate__fadeIn animate__delay-1s`}>
            <h2>
                {title}
            </h2>
            <ul>
                {
                    tags && tags.map((tags) => (
                        <li key={tags.id}>{tags}</li>
                    ))
                }
            </ul>
        </div>
        
        <div className={`${styles.img} animate__animated animate__zoomIn animate__delay-2s`}>
            <Image src={imageUrl} alt={`image of ${title}`}/>
        </div>
        <div className={`${styles.projectInfoBottom} animate__animated animate__fadeIn animate__delay-1s`}>
            <div className={styles.year}>{year}</div>
            <a href={website} target='_blank' rel="noreferrer">visit site</a>
        </div>
    </div> 
)

export default ProjectCard;
