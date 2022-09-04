import Link from 'next/link'
import Image from 'next/image'

// Styles
import styles from './nav.module.css';

// logo
import Logo from '../assests/images/mtomas..svg';

export default function Nav(){
    return(
        <div className={styles.nav}>
            <div className={styles.logo}>
                <a href="/">
                <Image
                    src={Logo}
                    alt="mtomas logo"
                />
                </a>
            </div>
            <div className={styles.available}>
                <div className={styles.circle}></div>
                <Link href="#" className={styles.link}>
                    available for work
                </Link>
            </div>
            <div className={styles.navigation}>
                <ul>
                    <li>
                        <Link href="#work">
                            <a href="#">work</a>
                        </Link>
                    </li>
                    
                    <li>
                        <Link href="#">
                            <a href="#">process</a>
                        </Link>
                    </li>
                    
                    <li>
                        <Link href="#">
                            <a href="#">figma freebies</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <a href="#">about me</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}