import Card from '../Card'
import Filter from '../Filter'
import SearchBar from '../SearchBar'
import styles from './index.module.scss'

export default function Main(){
    return (
        <main className={styles.main}>
            <section className={styles['tools-content']}>
                <SearchBar />
                <Filter />
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