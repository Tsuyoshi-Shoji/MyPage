import styles from "@/styles/profile_body.module.css"
import hobbiesStyles from "@/styles/hobbies_contents.module.css"
import { useState, useRef, useEffect } from "react"
import LocateBody from "@/components/locate_body"
import HistoryContents from "@/components/history_contents"
import { HOBBIES_DATA } from "@/res/hobbiesData"

export default function Profile_body() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [overlayContent, setOverlayContent] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const detailitemsRef = useRef([]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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

  const hobbiesContent = (
    <div className={hobbiesStyles.hobbies_container}>
      <h3 className={hobbiesStyles.hobbies_title}>趣味</h3>
      <div className={hobbiesStyles.hobbies_list}>
        {HOBBIES_DATA.map((hobby) => (
          <div key={hobby.id} className={hobbiesStyles.hobby_item}>
            <h4 className={hobbiesStyles.hobby_title}>{hobby.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );

  const historyContent = <HistoryContents />;

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
            onMouseEnter={!isMobile ? handleMouseEnter : null}
            onMouseLeave={!isMobile ? handleMouseLeave : null}>
            Tsuyoshi Shoji
          </div>
          {(isHovered || isMobile) && (
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
            "Location", "Skills", "Hobbies", "History"
          ].map((item, index) => (
            <div
              key={index}
              className={styles.detail_item}
              style={{ opacity: 0, transform: 'translateY(-10px)', transition: 'opacity 0.6s ease, transform 0.6s ease' }}
              ref={(el) => detailitemsRef.current[index] = el}
              onMouseEnter={!isMobile && isVisible ? () => {
                if (item === "Skills") {
                  handleItemMouseEnter(skillsContent);
                } else if (item === "Location") {
                  handleItemMouseEnter(<LocateBody />);
                } else if (item === "Hobbies") {
                  handleItemMouseEnter(hobbiesContent);
                } else if (item === "History") {
                  handleItemMouseEnter(historyContent);
                } else {
                  handleItemMouseEnter(item + " Overlay Content");
                }
              } : null}
              onMouseLeave={!isMobile ? handleItemMouseLeave : null}
              onClick={isMobile && isVisible ? () => {
                if (item === "Skills") {
                  handleItemMouseEnter(skillsContent);
                } else if (item === "Location") {
                  handleItemMouseEnter(<LocateBody />);
                } else if (item === "Hobbies") {
                  handleItemMouseEnter(hobbiesContent);
                } else if (item === "History") {
                  handleItemMouseEnter(historyContent);
                } else {
                  handleItemMouseEnter(item + " Overlay Content");
                }
              } : null}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {overlayContent && ( // Conditionally render overlay
        <div key={`${overlayContent}-${Date.now()}`} className={styles.screenOverlay}>
          {isMobile && (
            <button
              onClick={handleItemMouseLeave}
              className={styles.closeButton}
              aria-label="Close">
              ×
            </button>
          )}
          {overlayContent}
        </div>
      )}
    </div>
  );
}