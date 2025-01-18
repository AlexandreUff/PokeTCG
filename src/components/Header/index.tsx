import logo from '../../assets/logo.png'
import styles from './index.module.scss'

export default function Header(){
    return (
        <header className={styles.header}>
            <img className={styles.logo} src={logo} />
            <p className={styles.doc} >Documentação</p>
        </header>
    )
}