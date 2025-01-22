import { useContext, useEffect, useState } from "react"
import { FilterList } from "../Icons"
import styles from "./index.module.scss"
import { ModalContext } from "../../provider/modal"
import { FiltersService } from "../../services/filters-service"

interface FilterFieldsStructure {
    label: string,
    selected: boolean
}

interface FilterType {
 name: string,
 fields: FilterFieldsStructure[]
}

export default function Filter(){

    const { openModal } = useContext(ModalContext);

    const [filter, setFilter] = useState<FilterType[]>([])

    const filtersNamesList = [/* 'sets',  */'rarities', 'types', 'subtypes', 'supertypes']

    async function getFilterLabelsByType(filterName: string){
        const result = await FiltersService.get(filterName)
        return result.data
    }

    async function createFiltersStructures(){

        const allFilters: FilterType[] = []

        filtersNamesList.forEach(async filterName => {
            const filtersLabels = await getFilterLabelsByType(filterName);
            const filterType: FilterType = {
                name: filterName,
                fields: [... filtersLabels]
            }

            console.log('filterType', filterType)

            allFilters.push(filterType)
        })

        console.log('filtreiros', allFilters)
    }

    useEffect(() => {
        createFiltersStructures()
    }, [])

    return (
        <div className={styles['filter-content']}>
            <button onClick={() => openModal('Filtros', <b>RÁ</b>)}><FilterList /> Filtros</button>
            <section className={styles['filters-selected']}>
                Teste
            </section>
        </div>
    )
}