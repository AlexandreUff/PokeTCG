import { Next, Previous } from '../Icons'
import styles from './index.module.scss'

interface PaginationProps {
    totalCount?: number,
    pageSelected: number,
    setPageSelected: (nextPage: number) => void,
}

export default function Pagination({ totalCount, pageSelected, setPageSelected }: PaginationProps){

    // const [pageSelected, setPageSelected] = useState<number>(1);

    const totalPagination = totalCount && handlerPagination(totalCount);

    function handlerPagination(total: number){
        const totalPageGross = total / 20;
        const totalRoundedDown = Math.ceil(totalPageGross);

        if(totalPageGross > totalRoundedDown) return totalRoundedDown + 1

        return totalRoundedDown
    }

    function renderPaginationButtons (){

        const falseArray = [];

        const pageSelectedIsBiggerThanFive = pageSelected > 5;
        const firstValueCount = pageSelectedIsBiggerThanFive ? pageSelected - 3 : 1;
        const maxValueCount = pageSelectedIsBiggerThanFive ? pageSelected + 3 : 7 // Evitar que nº de botões exceda

        for (let i = firstValueCount; i <= maxValueCount; i++) {
            falseArray.push(<button key={i} title={`Ir à página ${i}`} className={`${styles.button} ${pageSelected === i ? styles.selected : ""}`} onClick={() => pageSelected !== i && setPageSelected(i)}>{i}</button>);
        };

        return falseArray;
    };

    function handlerSwitchPage(isNext: boolean) {
        if(totalPagination){
            if(isNext){
                setPageSelected(pageSelected < totalPagination ? pageSelected + 1 : pageSelected)
                return
            }
            setPageSelected(pageSelected > 1 ? pageSelected - 1 : pageSelected)
        }
    };

    return (
        <section className={styles.pagination}>
                {totalPagination ? <>
                    <button className={`${styles.button} ${styles.next}`} onClick={() => handlerSwitchPage(false)}> <Previous className={styles.icon} /> {"Anterior"}</button>
                    {renderPaginationButtons()} ... <button title={`Ir à página ${totalPagination}`} className={styles.button} onClick={() => pageSelected !== totalPagination && setPageSelected(totalPagination)}>{totalPagination}</button>
                    <button className={`${styles.button} ${styles.previous}`} onClick={() => handlerSwitchPage(true)}>{"Próximo"} <Next className={styles.icon} /></button>
            </> : "Gerando Paginação..."}
        </section>
    )
}