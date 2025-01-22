import { useState } from 'react';
import { Next, Previous } from '../Icons'
import styles from './index.module.scss'

interface PaginationProps {
    totalCount?: number
}

export default function Pagination({ totalCount }: PaginationProps){

    const [pageSelected, setPageSelected] = useState<number>(1);

    const totalPagination = totalCount && handlerPagination(totalCount);

    function handlerPagination(total: number){
        const totalPageGross = total / 20;
        const totalRoundedDown = Math.ceil(totalPageGross);

        if(totalPageGross > totalRoundedDown) return totalRoundedDown + 1

        return totalRoundedDown
    }

    function renderPaginationButtons (){

        const falseArray = [];

        for (let i = pageSelected; i <= pageSelected + 7; i++) {
            falseArray.push(<button key={i} title={`Ir à página ${i}`} className={`${styles.button} ${pageSelected === i ? styles.selected : ""}`} onClick={() => setPageSelected(i)}>{i}</button>);
        };

        return falseArray;
    };

    function handlerSwitchPage(isNext: boolean) {
        if(totalPagination){
            if(isNext){
                setPageSelected(prevPage => (prevPage < totalPagination) ? prevPage + 1 : prevPage)
                return
            }
            setPageSelected(prevPage => (prevPage > 1) ? prevPage - 1 : prevPage)
        }
    }

    return (
        <section className={styles.pagination}>
                {totalPagination ? <>
                    <button className={`${styles.button} ${styles.next}`} onClick={() => handlerSwitchPage(false)}> <Previous className={styles.icon} /> {"Anterior"}</button>
                    {renderPaginationButtons()} ... <button title={`Ir à página ${totalPagination}`} className={styles.button}>{totalPagination}</button>
                    <button className={`${styles.button} ${styles.previous}`} onClick={() => handlerSwitchPage(true)}>{"Próximo"} <Next className={styles.icon} /></button>
            </> : "Gerando Paginação..."}
        </section>
    )
}