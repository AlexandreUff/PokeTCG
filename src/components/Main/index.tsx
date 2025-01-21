import { useEffect, useState } from 'react'
import Card from '../Card'
import Filter from '../Filter'
import SearchBar from '../SearchBar'
import styles from './index.module.scss'
import { PokeAPIService } from '../../services/pokemonTCG-API'

export default function Main(){

    /* Veja se o nome para este State está bom */
    const [datas, setDatas] = useState<unknown>([])

    async function requestPokemonData(){
        const { data } = await PokeAPIService.getAll();
        console.log(data)
        if(data) setDatas(data)
    }

    useEffect(()=>{
        requestPokemonData()
    },[])

    return (
        <main className={styles.main}>
            <section className={styles['tools-content']}>
                <SearchBar />
                <Filter />
            </section>
            <section className={styles['card-content']}>
                {datas.map(data => {
                    return (
                        <Card data={data} />
                    )
                })}
            </section>
        </main>
    )
}