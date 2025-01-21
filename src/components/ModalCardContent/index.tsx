import { CardProps } from "../Card";
import styles from "./index.module.scss"

export default function ModalCardContent({data}: CardProps){
    return (
        <div className={styles.content}>
            <img src={data.images.large} alt={`Imagem de ${data.name}`} className={styles.image} />
            <p>{data.flavorText ?? <i>"Não há descrição disponpivel para este Pokemon."</i>}</p>
        </div>
    )
}