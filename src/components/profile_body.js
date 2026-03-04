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

  /*
  *　　スキルオーバーレイに表示しているコンテンツ
  */
  const skillsContent = (
    <div className={styles.skills_container}>
      <div className={styles.skills_section}>
        <div className={styles.section_title}>【実務経験】</div>

        <div className={styles.skill_category}>
          <div className={styles.category_title}>
            言語
          </div>
          <div className={styles.skill_tags}>
            {['Java', 'Objective-C', 'C#'].map((skill, i) => (
              <span key={i} className={styles.skill_tag} style={{ animationDelay: `${i * 0.1}s` }}>
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.skill_category}>
          <div className={styles.category_title}>
            フレームワーク
          </div>
          <div className={styles.skill_tags}>
            {['Android Java', '.NET Framework', 'Entity Framework', 'UIKit'].map((skill, i) => (
              <span key={i} className={styles.skill_tag} style={{ animationDelay: `${i * 0.1}s` }}>
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.skill_category}>
          <div className={styles.category_title}>
            クラウドサービス
          </div>
          <div className={styles.skill_tags}>
            {['Azure', 'AWS (S3)', 'Google Cloud'].map((skill, i) => (
              <span key={i} className={styles.skill_tag} style={{ animationDelay: `${i * 0.1}s` }}>
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.skill_category}>
          <div className={styles.category_title}>
            データベース
          </div>
          <div className={styles.skill_tags}>
            {['Azure SQL Server', 'MySQL'].map((skill, i) => (
              <span key={i} className={styles.skill_tag} style={{ animationDelay: `${i * 0.1}s` }}>
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.skill_category}>
          <div className={styles.category_title}>
            オペレーティングシステム
          </div>
          <div className={styles.skill_tags}>
            {['Windows', 'Android', 'Android Automotive', 'iOS', 'MacOS'].map((skill, i) => (
              <span key={i} className={styles.skill_tag} style={{ animationDelay: `${i * 0.1}s` }}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.skills_section}>
        <div className={styles.section_title}>【個人開発】</div>
        <div className={styles.skill_tags}>
          {['Linux', 'React', 'Next.js', 'JavaScript', 'HTML', 'CSS', 'Spring Framework'].map((skill, i) => (
            <span key={i} className={styles.skill_tag} style={{ animationDelay: `${i * 0.1}s` }}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  const handleItemMouseLeave = () => {
    setOverlayContent(null);
  };

  return (
    <div className={styles.profile_body}>
      <div className={styles.icon_section}>
        <img src="/Images/self-portrait.png" alt="Profile Icon" className={styles.profile_icon} />
        <div className={styles.profile_name_wrapper}>
          <div
            className={styles.profile_name}
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            Tsuyoshi Shoji
          </div>
          {isHovered && (
            <div className={styles.detail_popup}>
              System Engineer<br />
              1996/02/26（30）<br />
              Hokkai Gakuen Univ.<br />
              Graduated 2018<br />
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
              style={{ opacity: 0, transform: 'translateY(-10px)', transition: 'opacity 0.6s ease, transform 0.6s ease' }}
              ref={(el) => detailitemsRef.current[index] = el}
              onMouseEnter={isVisible ? () => {
                if (item === "Skills") {
                  handleItemMouseEnter(skillsContent);
                } else {
                  handleItemMouseEnter(item + " Overlay Content");
                }
              } : null}
              onMouseLeave={handleItemMouseLeave}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {overlayContent && ( // Conditionally render overlay
        <div key={`${overlayContent}-${Date.now()}`} className={styles.screenOverlay}>
          {overlayContent}
        </div>
      )}
    </div>
  );
}