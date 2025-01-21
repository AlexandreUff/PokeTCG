import styles from "./index.module.scss"
import { Search } from "../Icons";

export default function SearchBar(){
    return (
        <div className={styles["search-outline"]}>
            <input type="text" placeholder="Pesquise um Pokemon" className={styles["search-input"]} />
            <button className={styles["search-button"]} title="Pesquisar"><Search /></button>
        </div>
    )
}