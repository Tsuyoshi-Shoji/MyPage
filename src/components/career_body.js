import styles from '@/styles/career_body.module.css'
import { useState } from 'react'

export default function Career_body() {
    const [selectedLanguage, setSelectedLanguage] = useState("Japanese");

    return (
        <div className={styles.language_toggle_container}>
            <div>
                <button
                    onClick={() => setSelectedLanguage("Japanese")}
                    className={`${styles.button} ${selectedLanguage === "Japanese" ? styles.selected : ""}`}
                >
                    Japanese
                </button>
                <button
                    onClick={() => setSelectedLanguage("English")}
                    className={`${styles.button} ${selectedLanguage === "English" ? styles.selected : ""}`}
                >
                    English
                </button>
            </div>

            <iframe className={styles.iframe} src="PDFファイルのURL"></iframe>
        </div>
    );
}