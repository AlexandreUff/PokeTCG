import { useEffect, useState } from 'react'
import Card from '../Card'
import Filter from '../Filter'
import SearchBar from '../SearchBar'
import styles from './index.module.scss'
import { PokeAPIService } from '../../services/pokemonTCG-API'

export default function Main(){

    /* Veja se o nome para este State está bom */
    const [datas, setDatas] = useState<unknown>([])
    const [searchTerm, setSearchTerm] = useState<string>("")

    async function requestPokemonData(term?: string){
        const result = await PokeAPIService.getAll(term);
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