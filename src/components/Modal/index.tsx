import { useContext } from "react"
import styles from "./index.module.scss"
import { ModalContext } from "../../provider/modal"
import { X } from "../Icons"

export default function Modal(){

    const { toggleOpenModal } = useContext(ModalContext)

    return (
        <div className={styles['modal-background']} onClick={toggleOpenModal}>
            <div className={styles['modal-container']} onClick={e => e.stopPropagation()}>
                <header className={styles['modal-header']}>
                    Teste
                    <button className={styles['modal-close-button']} onClick={toggleOpenModal} title="Fechar"><X/></button>
                </header>
            </div>
        </div>
    )
}