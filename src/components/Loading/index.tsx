import { LoaderCircle } from "../Icons";
import styles from './index.module.scss'

export default function Loading(){
    return (
        <LoaderCircle className={styles['loading-animation']} />
    )
}