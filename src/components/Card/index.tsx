import styles from './index.module.scss'
import { Picture } from '../Icons'
import { useContext } from 'react'
import { ModalContext } from '../../provider/modal'
import { ICard, ITypes } from '../../types/card-types'

interface CardProps {
    data: ICard;
}

export default function Card({data}: CardProps){

    const { openModal } = useContext(ModalContext)

    console.log('Chegaram aqui', data)

    function listTypesAsString(types: ITypes[]): string{
        let text = ""
        types.forEach((eachType: string, i: number) => {
            text = text + `${eachType.replace('-', ' ')}${i !== types.length - 1 ? ', ' : ''}`
        })
        
        return text
    }

    return (
        <article className={styles.card} onClick={() => openModal("NOVO", <p>IRON</p>)}>
            <section title={data.name} className={styles['card-main']}>
                {data.images ? <img src={data.images.small} className={styles['card-image']} /> : (
                    <Picture className={styles['no-picture']} />
                )}
            </section>
            <section className={styles['card-info']}>
                <div className={styles['title-area']}>
                    <h2 className={styles['main-title']}>{data.name}</h2>
                    <p>Tipo: {listTypesAsString(data.types)}</p>
                </div>
                <div className={styles.frequency}>
                    <Picture className={styles['type-of-frequency']} />
                    <p>{data.rarity}</p>
                </div>
            </section>
        </article>
    )
}