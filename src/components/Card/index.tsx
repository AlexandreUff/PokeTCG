import styles from './index.module.scss'
import { Picture } from '../Icons'

export default function Card(){

    const pokemonName = "Pikachu"

    return (
        <article className={styles.card}>
            <section title={pokemonName} className={styles['card-main']}>
                <Picture className={styles['no-picture']} />
            </section>
            <section className={styles['card-info']}>
                <div className={styles['title-area']}>
                    <h2 className={styles['main-title']}>{pokemonName}</h2>
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