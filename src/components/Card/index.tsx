import styles from './index.module.scss'
import { Picture } from '../Icons'

export default function Card(){
    return (
        <article className={styles.card}>
            <section className={styles['card-main']}>
                <Picture className={styles['no-picture']} />
            </section>
            <section className={styles['card-info']}>
                <div className={styles['title-area']}>
                    <p className={styles['main-title']}>Bulba</p>
                    <p>Tipo planta</p>
                </div>
                <div className={styles.frequency}>
                    <Picture className={styles['type-of-frequency']} />
                    <p>Comum</p>
                </div>
            </section>
        </article>
    )
}