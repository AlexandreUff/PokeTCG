import { useEffect, useState } from 'react'
import Card from '../Card'
import Filter from '../Filter'
import SearchBar from '../SearchBar'
import styles from './index.module.scss'
import { ICard } from '../../types/card-types'
import { CardService } from '../../services/card-service'
import Pagination from '../Pagination'
import Loading from '../Loading'

export default function Main(){

    /* Veja se o nome para este State está bom */
    const [datas, setDatas] = useState<ICard[]>([])
    const [totalCount, setTotalCount] = useState<number | undefined>()
    const [pageSelected, setPageSelected] = useState<number>(1);
    const [searchTerm, setSearchTerm] = useState<string>("")

    const [loading, setLoading] = useState<boolean>(true)

    async function requestPokemonData(term?: string, page?:number){
        const result = await CardService.getAll(term, page);
        if(result?.data){
            setLoading(false);
            setDatas(result.data)
        }
        if(result?.totalCount) setTotalCount(result.totalCount)
    }

    useEffect(()=>{
        requestPokemonData()
    },[])

    useEffect(()=>{
        console.log('Search', searchTerm);
        setLoading(true);
        setPageSelected(1);
        requestPokemonData(searchTerm, 1)
    },[searchTerm])

    useEffect(()=>{
        console.log('Pajena', pageSelected);
        setLoading(true);
        requestPokemonData(searchTerm, pageSelected)
    },[pageSelected, searchTerm])

    return (
        <main className={styles.main}>
            <section className={styles['tools-content']}>
                <SearchBar getTerm={setSearchTerm} />
                <Filter />
            </section>
            <section className={styles['card-content']}>
                {!loading ? datas.map((data, i) => {
                    return (
                        <Card key={i+1} data={data} />
                    )
                }) :  <Loading />}
            </section>
            <Pagination totalCount={totalCount} pageSelected={pageSelected} setPageSelected={setPageSelected} />
        </main>
    )
}