import styles from './components-css/Header.module.css'
import logo from '../assets/logo.svg'

export function Header(){
    return (
        <header>
            <div className={styles.header}>
                <div className={styles.headerContent}>
                    <img className={styles.imageLogo} src={logo}></img>
                </div>
            </div>
        </header>
    )
}