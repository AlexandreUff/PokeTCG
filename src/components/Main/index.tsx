import Card from '../Card'
import styles from './index.module.scss'

export default function Main(){
    return (
        <main className={styles.main}>
            <section>

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