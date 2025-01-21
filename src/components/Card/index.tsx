import styles from './index.module.scss'
import { Picture } from '../Icons'
import { useContext } from 'react'
import { ModalContext } from '../../provider/modal'
import { ICard } from '../../types/card-types'

interface CardProps {
    data: ICard;
}

export default function Card({data}: CardProps){

    const { openModal } = useContext(ModalContext)

    console.log('Chegaram aqui', data)

    return (
        <article className={styles.card} onClick={() => openModal("NOVO", <p>IRON</p>)}>
            <section title={data.name} className={styles['card-main']}>
                <Picture className={styles['no-picture']} />
            </section>
            <section className={styles['card-info']}>
                <div className={styles['title-area']}>
                    <h2 className={styles['main-title']}>{data.name}</h2>
                    <p>Tipo planta</p>
                </div>
                <div className={styles.frequency}>
                    <Picture className={styles['type-of-frequency']} />
                    <p>Comum</p>
                </div>
            </section>
        </article>
    )
}