import { Next, Previous } from '../Icons'
import styles from './index.module.scss'

export default function Pagination(){

    const totalPagination = 7

    function renderPaginationButtons (){

        const falseArray = []

        for (let i = 1; i <= totalPagination; i++) {
            falseArray.push(<button key={i} title={`Ir à página ${i}`} className={styles.button}>{i}</button>)
        }

        return falseArray
    }

    return (
        <section className={styles.pagination}>
            <button className={`${styles.button} ${styles.next}`}> <Previous className={styles.icon} /> {"Anterior"}</button>
            {renderPaginationButtons()} ... <button title={`Ir à página ${totalPagination}`} className={styles.button}>{totalPagination}</button>
            <button className={`${styles.button} ${styles.previous}`}>{"Próximo"} <Next className={styles.icon} /></button>
        </section>
    )
}