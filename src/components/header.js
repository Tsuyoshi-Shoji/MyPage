import styles from "@/styles/header.module.css"
import Link from 'next/link'
import Nav from "@/components/nav"
import { useState } from 'react'

export default function Header() {
  const [isTouched, setIsTouched] = useState(false)

  const handleTouchStart = () => {
    setIsTouched(true)
  }

  const handleTouchEnd = () => {
    setIsTouched(false)
  }

  return (
    <header className={styles.header}>
      <Link href="/" legacyBehavior>
        <div 
          className={`${styles.logo} ${isTouched ? styles.touched : ''}`}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <span className={styles.portfolio}>Portfolio</span>
          <span className={styles.createdBy}> created by </span>
          <span className={styles.name}>Tsuyoshi Shoji</span>
        </div>
      </Link>

      <Nav />

    </header>
  );
}