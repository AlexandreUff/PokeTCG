import logo from '../../assets/logo.png'
import styles from './index.module.scss'

export default function Header(){
    return (
        <header className={styles.header}>
            <img className={styles.logo} src={logo} alt='Logo Pokémon' />
            <a href='https://i.ibb.co/bQRH5xL/Poke-TCG-DOC.jpg' target='_blank' className={styles.doc} >Documentação</a>
        </header>
    )
}