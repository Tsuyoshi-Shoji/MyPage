import styles from '@/styles/career_body.module.css'
import { useState, useEffect, useRef } from 'react'
import { CAREER_DATA } from '@/res/careerData'

export default function Career_body() {
    const [selectedLanguage, setSelectedLanguage] = useState("Japanese");
    const [visibleCards, setVisibleCards] = useState(new Set());
    const [isTransitioning, setIsTransitioning] = useState(false);
    const cardsRef = useRef({});
    const careerList = CAREER_DATA[selectedLanguage];

    const handleLanguageChange = (language) => {
        setIsTransitioning(true);
        setVisibleCards(new Set());
        setSelectedLanguage(language);

        // アニメーション完了後にisTransitioningをfalseに
        setTimeout(() => setIsTransitioning(false), 300);
    };

    useEffect(() => {
        // Intersection Observer 設定
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const cardId = entry.target.dataset.cardId;
                    if (entry.isIntersecting) {
                        setVisibleCards((prev) => new Set(prev).add(cardId));
                    } else {
                        // 表示領域外になった時にvisibleCardsから削除
                        setVisibleCards((prev) => {
                            const updated = new Set(prev);
                            updated.delete(cardId);
                            return updated;
                        });
                    }
                });
            },
            { threshold: 0.1 }
        );

        // 各カードを observe
        Object.values(cardsRef.current).forEach((card) => {
            if (card) observer.observe(card);
        });

        return () => {
            Object.values(cardsRef.current).forEach((card) => {
                if (card) observer.unobserve(card);
            });
        };
    }, [selectedLanguage]);

    return (
        <div className={styles.language_toggle_container}>
            <div className={styles.button_container}>
                <button
                    onClick={() => handleLanguageChange("Japanese")}
                    className={`${styles.button} ${selectedLanguage === "Japanese" ? styles.selected : ""}`}
                >
                    Japanese
                </button>
                <button
                    onClick={() => handleLanguageChange("English")}
                    className={`${styles.button} ${selectedLanguage === "English" ? styles.selected : ""}`}
                >
                    English
                </button>
            </div>

            <div className={`${styles.career_list} ${isTransitioning ? styles.transitioning : ""}`}>
                {careerList.map((career) => (
                    <div
                        key={career.id}
                        ref={(el) => cardsRef.current[career.id] = el}
                        data-card-id={career.id}
                        className={`${styles.career_card} ${visibleCards.has(String(career.id)) ? styles.visible : ""}`}
                    >
                        <div className={styles.card_inner}>
                            <h3 className={styles.project_title}>{career.project}</h3>
                            <div className={styles.career_item}>
                                <span className={styles.label}>{selectedLanguage === "Japanese" ? "役割：" : "Role:"}</span>
                                <span className={styles.value}>{career.role}</span>
                            </div>
                            <div className={styles.career_item}>
                                <span className={styles.label}>{selectedLanguage === "Japanese" ? "規模：" : "Scale:"}</span>
                                <span className={styles.value}>{career.scale}</span>
                            </div>
                            <div className={styles.career_item}>
                                <span className={styles.label}>{selectedLanguage === "Japanese" ? "参画年数：" : "Duration:"}</span>
                                <span className={styles.value}>{career.years}</span>
                            </div>
                            <div className={styles.career_item}>
                                <span className={styles.label}>{selectedLanguage === "Japanese" ? "使用スキル：" : "Skills:"}</span>
                                <span className={styles.value}>{career.skills}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}