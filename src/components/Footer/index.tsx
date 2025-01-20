import Pagination from '../Pagination'
import styles from './index.module.scss'

export default function Footer(){
    return (
        <main className={styles.footer}>
            <Pagination />
        </main>
    )
}