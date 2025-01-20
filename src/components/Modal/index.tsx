import styles from "./index.module.scss"

export default function Modal(){
    return (
        <div className={styles['modal-background']}>
            <div className={styles['modal-container']}>
                <header className={styles['modal-header']}>
                    Teste
                </header>
            </div>
        </div>
    )
}