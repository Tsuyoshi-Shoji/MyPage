import styles from "@/styles/works_body.module.css";
import { useRef, useState, useEffect } from "react";
import { WORKS_DATA } from "@/res/worksData";

export default function Works_body() {
  const scrollContainerRef = useRef(null);
  const progressBarRef = useRef(null);
  const [visibleWorks, setVisibleWorks] = useState(new Set());
  const [isDraggingProgress, setIsDraggingProgress] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleWorks((prev) => new Set(prev).add(entry.target.dataset.id));
          } else {
            setVisibleWorks((prev) => {
              const newSet = new Set(prev);
              newSet.delete(entry.target.dataset.id);
              return newSet;
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    const cards = document.querySelectorAll(`.${styles.work_card}`);
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    const progressBar = progressBarRef.current;

    const handleWheel = (e) => {
      e.preventDefault();
      scrollContainer.scrollLeft += e.deltaY;
    };

    const handleScroll = () => {
      if (scrollContainer) {
        const scrollPercentage = scrollContainer.scrollLeft / (scrollContainer.scrollWidth - scrollContainer.clientWidth);
        scrollContainer.parentElement.style.setProperty('--scroll-progress', scrollPercentage);
      }
    };

    const handleProgressMouseDown = () => {
      setIsDraggingProgress(true);
    };

    const handleProgressMouseMove = (e) => {
      if (!isDraggingProgress) return;

      const gallerySection = scrollContainer.parentElement;
      const barWidth = gallerySection.clientWidth;
      const clickX = e.clientX;
      const galleryLeft = gallerySection.getBoundingClientRect().left;
      const relativeX = clickX - galleryLeft;
      const scrollPercentage = Math.max(0, Math.min(1, relativeX / barWidth));

      const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
      scrollContainer.scrollLeft = scrollPercentage * maxScroll;
    };

    const handleProgressMouseUp = () => {
      setIsDraggingProgress(false);
    };

    // 初期化時にスクロール位置を設定
    handleScroll();

    scrollContainer?.addEventListener('wheel', handleWheel, { passive: false });
    scrollContainer?.addEventListener('scroll', handleScroll);
    progressBar?.addEventListener('mousedown', handleProgressMouseDown);
    document.addEventListener('mousemove', handleProgressMouseMove);
    document.addEventListener('mouseup', handleProgressMouseUp);

    return () => {
      scrollContainer?.removeEventListener('wheel', handleWheel);
      scrollContainer?.removeEventListener('scroll', handleScroll);
      progressBar?.removeEventListener('mousedown', handleProgressMouseDown);
      document.removeEventListener('mousemove', handleProgressMouseMove);
      document.removeEventListener('mouseup', handleProgressMouseUp);
    };
  }, [isDraggingProgress]);

  return (
    <div className={styles.works_body}>
      <div className={styles.works_gallery_section}>
        <div className={styles.scroll_container} ref={scrollContainerRef}>
          {WORKS_DATA.map((work) => (
            <div
              key={work.id}
              data-id={work.id}
              className={`${styles.work_card} ${visibleWorks.has(String(work.id)) ? styles.visible : ""
                }`}
            >
              <a href={work.url} target="_blank" rel="noopener noreferrer">
                <div className={styles.work_thumbnail}>
                  <img src={work.thumbnail} alt={work.name} />
                  <div className={styles.work_name}>
                    <p>{work.name}</p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
        <div className={styles.progress_bar} ref={progressBarRef}></div>
      </div>
    </div>
  );
}
