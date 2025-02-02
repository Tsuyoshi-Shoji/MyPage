import styles from "@/styles/profile_body.module.css"
import { useState, useRef } from "react";

export default function Profile_body() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [overlayContent, setOverlayContent] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const detailitemsRef = useRef([]);

  const handleClick = () => {
    if (isAnimating) return; //連打抑止

    setIsAnimating(true);
    setIsVisible(!isVisible);

    const animationDuration = 200;
    const itemsCount = detailitemsRef.current.length;

    if (!isVisible) {
      detailitemsRef.current.forEach((item, index) => {
        setTimeout(() => {
          item.style.opacity = 1;
          item.style.transform = 'translateY(0)';

          if (index === itemsCount - 1) {
            setTimeout(() => setIsAnimating(false), animationDuration);
          }
        }, index * 200);
      })
    } else {
      detailitemsRef.current.forEach((item) => {
        item.style.opacity = 0;
        item.style.transform = 'translateY(-10px)'
      });
      setTimeout(() => setIsAnimating(false), animationDuration);
    }
  }

  const handleMouseEnter = () => {
    setIsHovered(!isHovered);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleItemMouseEnter = (content) => {
    setOverlayContent(content);
  };

  const handleItemMouseLeave = () => {
    setOverlayContent(null);
  };

  return (
    <div className={styles.profile_body}>
      <div className={styles.icon_section}>
        <img src="./favicon.ico" alt="Profile Icon" className="profile_icon" />
        <div className={styles.profile_name_wrapper}> {/* ラッパーを追加 */}
          <div
            className={styles.profile_name}
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            Tsuyoshi Shoji
          </div>
          {/* ホバー時に表示する詳細 */}
          {isHovered && (
            <div className={styles.detail_popup}>
              庄司 剛<br />
              生年月日 : 1996/02/26 (28)<br />
              血液型 : B型<br />
              北海学園大学 経営学部<br />
              {/* Hokkai Gakuen Univ.<br />
              Business Administration<br /> */}
            </div>
          )}
        </div>
      </div>

      <div className={styles.profile_section}>
        <div className={styles.profile_item}>
          {[
            "Locate", "Skills", "Hobbies", "Types", "Gadget"
          ].map((item, index) => (
            <div
              key={index}
              className={styles.detail_item}
              style={{ opacity: 0, transform: 'translateY(-10px)', transition: 'opacity 0.3s ease, transform 0.3s ease' }}
              ref={(el) => detailitemsRef.current[index] = el}
              onMouseEnter={isVisible ? () => handleItemMouseEnter(item + " Overlay Content") : null}
              onMouseLeave={handleItemMouseLeave}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {overlayContent && ( // Conditionally render overlay
        <div className={styles.screenOverlay}>
          {overlayContent}
        </div>
      )}
    </div>
  );
}