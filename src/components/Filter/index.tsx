import { FilterList } from "../Icons"
import styles from "./index.module.scss"

export default function Filter(){
    return (
        <div className={styles['filter-content']}>
            <button><FilterList /> Filtros</button>
            <section className={styles['filters-selected']}>
                Teste
            </section>
        </div>
    )
}