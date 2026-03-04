import styles from '@/styles/main.module.css'
import { useState, useEffect, useRef } from 'react'


export default function Main() {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768)
        }

        // 初期化時に一度実行
        handleResize()

        // リサイズイベントを監視
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    const imageSrc = isMobile ? '/Images/phone_main.png' : '/Images/pc_main.png'

    return (
        <div className={styles.main}>
            <img src={imageSrc} alt="Main" className={styles.mainImage} />
        </div>
    )
}