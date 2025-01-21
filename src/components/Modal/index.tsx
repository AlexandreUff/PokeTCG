import { useContext } from "react"
import styles from "./index.module.scss"
import { ModalContext } from "../../provider/modal"

export default function Modal(){

    const { toggleOpenModal } = useContext(ModalContext)

    return (
        <div className={styles['modal-background']} onClick={() => [toggleOpenModal(), console.log('err')]}>
            <div className={styles['modal-container']}>
                <header className={styles['modal-header']}>
                    Teste
                </header>
            </div>
        </div>
    )
}