import { useContext, useEffect, useState } from "react"
import { FilterList } from "../Icons"
import styles from "./index.module.scss"
import { ModalContext } from "../../provider/modal"
import { FiltersService } from "../../services/filters-service"
import { filtersNamesList } from "../../utils/filters-list"

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

    function handlerFilter(filterName: string, fieldId: number){
        const filterSelected = filters.find(filter => filter.name === filterName);

        if(filterSelected) {
            filterSelected.fields[fieldId].selected = !filterSelected.fields[fieldId].selected;
        
            const filterSelectedIndex = filters.findIndex(filter => filter.name === filterName);
    
            const newFilters = filters;
            newFilters[filterSelectedIndex] = filterSelected
            setFilters([...newFilters])
        };
    }

    function filtersPanel(){
        return (
                    <div className={styles['filter-panel']}>
                        {filters.map(filter => {
                            return (
                                <section>
                                    <h5>
                                        {filter.name}
                                    </h5>
                                    <div className={styles['labels-content']}>
                                        {filter.fields.map((field, i) => {
                                            return (
                                                <div className={styles['labels-item']}>
                                                    <label>
                                                        <input type="checkbox" checked={field.selected} onClick={() => handlerFilter(filter.name, i)} /> {field.label}
                                                    </label>
                                                </div>)
                                        })}
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