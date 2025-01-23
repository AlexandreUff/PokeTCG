import { CardProps } from "../Card";
import styles from "./index.module.scss"

export default function ModalCardContent({data}: CardProps){
    return (
        <div className={styles.content}>
            <img src={data.images.large} alt={`Imagem de ${data.name}`} className={styles.image} />
            <p className={styles['pokemon-description']}>{data.flavorText ?? <i>"Não há descrição disponpivel para este Pokemon."</i>}</p>
            <b>Attacks:</b>
            <section className={styles['attack-content']}>
                {data.attacks.map(attack => {
                    return (
                        <div className={styles["attack-info-content"]}>
                            <p><span className={styles["attack-name"]}>{attack.name}</span> | <span className={styles["attack-damage"]}>{attack.damage}</span></p>
                            <p className={styles['attack-description']}>{attack.text}</p>
                        </div>
                    )
                })}
            </section>
            <b>Weakness:</b>
            <section className={styles['weakness-content']}>
                {data.weaknesses.map(weakness => {
                    return (
                        <div className={styles["weakness-pill"]}>
                            <p>
                                {weakness.type} | {weakness.value}
                            </p>
                        </div>
                    )
                })}
            </section>
        </div>
    )
}