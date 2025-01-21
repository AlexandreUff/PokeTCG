import { useContext } from "react"
import styles from "./index.module.scss"
import { ModalContext } from "../../provider/modal"
import { X } from "../Icons"
import { ModalContent } from "../../provider/modal"

interface ModalProps {
    content: ModalContent
}

export default function Modal({content}: ModalProps){

    const { closeModal } = useContext(ModalContext)
    const {title, body} = content;

    return (
        <div className={styles['modal-background']} onClick={closeModal}>
            <div className={styles['modal-container']} onClick={e => e.stopPropagation()}>
                <header className={styles['modal-header']}>
                    {title}
                    <button className={styles['modal-close-button']} onClick={closeModal} title="Fechar"><X/></button>
                </header>
                {body}
            </div>
        </div>
    )
}