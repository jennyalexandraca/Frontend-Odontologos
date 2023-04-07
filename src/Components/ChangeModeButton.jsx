import React from "react"
import styles from "./ChangeModeButton.module.css"

function ChangeModeButton({ onClick }) {
    return (
        <div className={styles.toggleDark}>
            <input
                type="checkbox"
                className={styles.checkbox}
                id="checkbox"
                onClick={onClick}
            />
            <label htmlFor="checkbox" className={styles.label}>
                <span className={styles.moon}>🌙</span>
                <span className={styles.sun}>☀</span>
                <div className={styles.ball}/>
            </label>
        </div>
    )
}

export default ChangeModeButton
