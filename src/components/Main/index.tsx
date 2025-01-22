import { useEffect, useState } from 'react'
import Card from '../Card'
import Filter from '../Filter'
import SearchBar from '../SearchBar'
import styles from './index.module.scss'
import { ICard } from '../../types/card-types'
import { CardService } from '../../services/card-service'

export default function Main(){

    /* Veja se o nome para este State está bom */
    const [datas, setDatas] = useState<ICard[]>([])
    const [searchTerm, setSearchTerm] = useState<string>("")

    async function requestPokemonData(term?: string){
        const result = await CardService.getAll(term);
        // console.log(data)
        if(result?.data) setDatas(result.data)
    }

    useEffect(()=>{
        requestPokemonData()
    },[])

    useEffect(()=>{
        console.log('Search', searchTerm);
        requestPokemonData(searchTerm)
    },[searchTerm])

    return (
        <main className={styles.main}>
            <section className={styles['tools-content']}>
                <SearchBar getTerm={setSearchTerm} />
                <Filter />
            </section>
            <section className={styles['card-content']}>
                {datas ? datas.map(data => {
                    return (
                        <Card data={data} />
                    )
                }) : "Não há Pokempns a exibir"}
            </section>
        </main>
    )
}