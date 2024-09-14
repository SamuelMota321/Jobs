import { useState } from "react"
import styles from "./styles.module.scss"

export const ApplicationJobCard = ({ title, name, email }) => {
    const [expand, setExpand] = useState(false)

    return (
        <div>
            <div className={styles.flex}>
                <h3>{name} - {title}</h3>
                <button
                    onClick={() => { setExpand(!expand), console.log(expand) }}
                    className={`${styles.toggleButton} ${expand ? styles.active : ""}`}
                >
                    <span className={expand ? `${styles.horizontal}` : styles.horizontal}></span>
                    <span className={expand ? `${styles.vertical}` : styles.horizontal}></span>
                </button>
            </div>
            <p className={`${styles.dropdownmenu} ${expand ? styles.active : null}`}>Detalhes da candidatura:</p>
            <p className={`${styles.dropdownmenu} ${expand ? styles.active : null}`}>Email: <b>{email}</b></p>
        </div>
    )
}