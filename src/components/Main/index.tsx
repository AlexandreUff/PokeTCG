import Card from '../Card'
import SearchBar from '../SearchBar'
import styles from './index.module.scss'

export default function Main(){
    return (
        <main className={styles.main}>
            <section className={styles['card-content']}>
                <SearchBar />
            </section>
            <section className={styles['card-content']}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </section>
        </main>
    )
}