import styles from '@/styles/main.module.css'
import { useState, useEffect, useRef } from 'react'


const websites = [
    '/Images/Nop.png',
];

export default function Main() {
    const [currentWebsite, setCurrentWebsite] = useState(0);
    const slideInterval = useRef(null);

    useEffect(() => {
        // スライドショーの開始
        slideInterval.current = setInterval(() => {
            setCurrentWebsite((prev) => (prev + 1) % websites.length);
        }, 5000); // 5秒ごとに次の画像へ

        // コンポーネントがアンマウントされたら、スライドショーを停止
        return () => clearInterval(slideInterval.current);
    }, []);

    return (
        <main className={styles.main}>
            <div className={styles.title_container}>
                <h1>Created</h1>
            </div>
            <div className={styles.sliderContainer}>
                {websites.map((website, index) => (
                    <div key={index} className={`${styles.slide} ${index === currentWebsite ? styles.active : ''}`}>
                    <img src={website} alt="Image 1" class="slide" />
                    </div>
                ))}
            </div>
        </main>
    )
}