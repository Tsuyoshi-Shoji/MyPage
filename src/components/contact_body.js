import styles from "@/styles/contact_body.module.css"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons"
import { faLine } from "@fortawesome/free-brands-svg-icons"

export default function Contact_body() {
  const [showQRCode, setShowQRCode] = useState(false)

  return (
    <div className={styles.contact_body}>
      <div className={styles.contact_container}>

        <div className={styles.contact_content}>
          <div className={styles.contact_item}>
            <div className={styles.icon_wrapper}>
              <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
            </div>
            <div className={styles.info_wrapper}>
              <h3 className={styles.contact_label}>Email</h3>
              <a href="mailto:ihsoyustijohs@gmail.com" className={styles.contact_value}>
                ihsoyustijohs@gmail.com
              </a>
            </div>
          </div>

          <div className={styles.contact_item}>
            <div className={styles.icon_wrapper}>
              <FontAwesomeIcon icon={faPhone} className={styles.icon} />
            </div>
            <div className={styles.info_wrapper}>
              <h3 className={styles.contact_label}>Phone</h3>
              <a href="tel:+81-90-xxxx-xxxx" className={styles.contact_value}>
                090-XXXX-XXXX
              </a>
            </div>
          </div>

          <div 
            className={styles.contact_item}
            onClick={() => setShowQRCode(!showQRCode)}
            style={{ cursor: 'pointer' }}
          >
            <div className={styles.icon_wrapper}>
              <FontAwesomeIcon icon={faLine} className={styles.icon} />
            </div>
            <div className={styles.info_wrapper}>
              <h3 className={styles.contact_label}>LINE</h3>
              <p className={styles.contact_value_text}>Click icon to view QR Code</p>
            </div>
          </div>
        </div>

        {showQRCode && (
          <div className={styles.qrcode_overlay} onClick={() => setShowQRCode(false)}>
            <div className={styles.qrcode_modal} onClick={(e) => e.stopPropagation()}>
              <button
                className={styles.qrcode_close}
                onClick={() => setShowQRCode(false)}
              >
                ✕
              </button>
              <h3 className={styles.qrcode_title}>LINE QR Code</h3>
              <div className={styles.qrcode_placeholder}>
                <p>Coming Soon...</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
