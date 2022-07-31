/* eslint-disable jsx-a11y/alt-text */
// // Imports
// import Projects from '../projects.json'
import Image from 'next/image'

import { useState } from 'react'
import { createClient } from "@supabase/supabase-js"

// Styles
import styles from './projects.module.css'


export async function getStaticProps() {
    const supabaseAdmin = createClient(
        process.env.NEXT_PUBLICK_SUPABASE_URL || '',
        process.env.SUPABASE_SERVICE_ROLE_KEY || ''
    )

    const { data } = await supabaseAdmin
        .from('projects')
        .select('*')
        .order('id')

    return {
        props: {
            projects: data,
        },
    }
}



export default function projectCards({ projects }){ 

    return(
        <div className={styles.heroContainer}>
            <p className={styles.sectionTitle}>Selected projects</p>
            <hr className={styles.line}></hr>
            
        <div className={styles.Projects}>
            {projects && projects.map( project => (
                <BlurImage key={project.id} project={project} />
            ))}
        </div>
        </div>    
    )
}



function BlurImage({ project }) {

    const [isLoading, setLoading] = useState(true)
  
    return (

            <div className={styles.project} key={project.id}>
                <div className={styles.projectImage}>
                    <Image 
                        src={project.imageSrc}
                        layout="fill"
                        onLoadingComplete={() => setLoading(false)}
                    />
                </div>
                <div className={styles.projectInfo}>
                    <div className={styles.projectInfoTop}>
                                    <ul key={ project.id }>
                                        <li>{tag}</li>
                                    </ul>    
                        <div className={styles.year}>{project.year}</div>
                    </div>
                    <div className={styles.projectInfoBottom}>
                        <h2>{project.name}</h2>
                    </div>
                </div>
            </div>  
    )
  }