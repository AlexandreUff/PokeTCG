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

    const [filters, setFilters] = useState<FilterType[]>([]);
    console.log('filters', filters) // Só pro build não reclamar

    const filtersNamesList = [/* 'sets',  */'rarities', 'types', 'subtypes', 'supertypes'];

    async function getFilterLabelsByType(filterName: string){
        const result = await FiltersService.get(filterName)
        return result?.data ? result.data : []
    }

    async function createFiltersStructures(){       
        const filterPromises = filtersNamesList.map(async filterName => {
            const filtersLabels = await getFilterLabelsByType(filterName);
            const filterType: FilterType = {
                name: filterName,
                fields: filtersLabels.map(label => {
                    return {
                        label: label,
                        selected: false
                    }
                })
            }

            return filterType
        })
        
        const allFilters: FilterType[] = await Promise.all(filterPromises);

        setFilters(allFilters);
    }

    function filtersPanel(){
        return (
                    <div>
                        {filtersNamesList.map(filter => {
                            return (
                                <section>
                                    <p>
                                        {filter}
                                    </p>
                                    <div>
                                        <p>{"[]"} | Nome </p>
                                    </div>
                                </section>
                            )
                        })}
                    </div>
                )
    }

    useEffect(() => {
        createFiltersStructures()
    }, [])

    return (
        <div className={styles['filter-content']}>
            <button onClick={() => openModal('Filtros', filtersPanel())}><FilterList /> Filtros</button>
            <section className={styles['filters-selected']}>
                Teste
            </section>
        </div>
    )
}