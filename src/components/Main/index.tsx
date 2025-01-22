import { useEffect, useState } from 'react'
import Card from '../Card'
import Filter from '../Filter'
import SearchBar from '../SearchBar'
import styles from './index.module.scss'
import { ICard } from '../../types/card-types'
import { CardService } from '../../services/card-service'
import Pagination from '../Pagination'

export default function Main(){

    /* Veja se o nome para este State está bom */
    const [datas, setDatas] = useState<ICard[]>([])
    const [totalCount, setTotalCount] = useState<number | undefined>()
    const [pageSelected, setPageSelected] = useState<number>(1);
    const [searchTerm, setSearchTerm] = useState<string>("")

    async function requestPokemonData(term?: string, page?:number){
        const result = await CardService.getAll(term, page);
        if(result?.data) setDatas(result.data)
        if(result?.totalCount) setTotalCount(result.totalCount)
    }

    useEffect(()=>{
        requestPokemonData()
    },[])

    useEffect(()=>{
        console.log('Search', searchTerm);
        setPageSelected(1);
        requestPokemonData(searchTerm, 1)
    },[searchTerm])

    useEffect(()=>{
        console.log('Pajena', pageSelected);
        requestPokemonData(searchTerm, pageSelected)
    },[pageSelected, searchTerm])

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
            <Pagination totalCount={totalCount} pageSelected={pageSelected} setPageSelected={setPageSelected} />
        </main>
    )
}