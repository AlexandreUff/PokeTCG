import styles from "./index.module.scss"
import { Search } from "../Icons";
import { ChangeEvent, useState } from "react";

interface SearchBarProps {
    getTerm: (term: string) => void;
}

export default function SearchBar({ getTerm }:SearchBarProps){

    const [searchTerm, setSearchTerm] = useState<string>("");

    function onChangeTerm(event: ChangeEvent<HTMLInputElement>){
        setSearchTerm(event.target.value);
    }

    function handleTerm(){
        getTerm(searchTerm ? `&q=name:${searchTerm} `: "");
    }

    return (
        <div className={styles["search-outline"]}>
            <input type="text" placeholder="Pesquise um Pokemon" className={styles["search-input"]} value={searchTerm} onChange={onChangeTerm} />
            <button className={styles["search-button"]} title="Pesquisar" onClick={handleTerm}><Search /></button>
        </div>
    )
}