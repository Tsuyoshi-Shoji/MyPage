import styles from '@/styles/main.module.css'
import { useState, useEffect, useRef } from 'react'
import { GADGET_DATA } from '@/res/gadgetData'


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
            <div className={styles.gadgetSection}>
                <h2 className={styles.gadgetTitle}>My Gadgets</h2>
                <div className={styles.gadgetContainer}>
                    {GADGET_DATA.map((gadget) => (
                        <div key={gadget.id} className={styles.gadgetCard}>
                            <div className={styles.gadgetHeader}>
                                <h3 className={styles.gadgetName}>{gadget.name}</h3>
                                {gadget.model && <p className={styles.gadgetModel}>{gadget.model}</p>}
                            </div>
                            <div className={styles.gadgetSpecs}>
                                {gadget.specs.map((spec, index) => (
                                    <div key={index} className={styles.specItem}>
                                        <span className={styles.specLabel}>{spec.label}:</span>
                                        <span className={styles.specValue}>{spec.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
