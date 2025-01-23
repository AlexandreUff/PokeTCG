import styles from './index.module.scss'
import { Picture, PokeBall } from '../Icons'
import { useContext } from 'react'
import { ModalContext } from '../../provider/modal'
import { ICard, ITypes } from '../../types/card-types'
import ModalCardContent from '../ModalCardContent'

export interface CardProps {
    data: ICard;
}

export default function Card({data}: CardProps){

    const { openModal } = useContext(ModalContext)

    console.log('Chegaram aqui', data)

    const noDefinedAttribute = <span className={styles['no-defined']}>No defined</span>;

    function listTypesAsString(types: ITypes[]): string{
        let text = ""
        types.forEach((eachType: string, i: number) => {
            text = text + `${eachType.replace('-', ' ')}${i !== types.length - 1 ? ', ' : ''}`
        })
        
        return text
    }

    return (
        <article className={styles.card} onClick={() => openModal(data.name, <ModalCardContent data={data} />)}>
            <section title={data.name} className={styles['card-main']}>
                {data.images ? <img src={data.images.small} className={styles['card-image']} alt={"Image of " + data.name + " card"} /> : (
                    <Picture className={styles['no-picture']} />
                )}
            </section>
            <section className={styles['card-info']}>
                <div className={styles['title-area']}>
                    <h2 className={styles['main-title']}>{data.name}</h2>
                    <p>Tipo: {data?.types ? listTypesAsString(data.types) : noDefinedAttribute}</p>
                </div>
                <div className={styles.frequency}>
                    <PokeBall className={styles['type-of-frequency']} />
                    <p>{data?.rarity ? data.rarity : noDefinedAttribute}</p>
                </div>
            </section>
        </article>
    )
}