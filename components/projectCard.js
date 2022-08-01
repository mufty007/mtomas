// Imports
import Image from 'next/image'

// Styles
import styles from './projects.module.css'

const ProjectCard = ({ id, title, year, website, tags, imageUrl }) => (
    <div className={styles.project} key={id}>
        <div className={styles.projectImage}>
            <div className={styles.img}>
            <Image 
                src={imageUrl}
                layout="responsive"
                alt={title}
                className={styles.img}
            />
            </div>
        </div>
        <div className={styles.projectInfo}>
            <div className={styles.projectInfoTop}>

                <ul>
                    <li>{tags}</li>
                </ul>
                                
                <div className={styles.year}>{year}</div>
            </div>
            <div className={styles.projectInfoBottom}>
                <h2>
                    <a href={website} target='_blank' rel="noreferrer">{title}</a>
                </h2>
            </div>
        </div>
    </div> 
)

export default ProjectCard;
