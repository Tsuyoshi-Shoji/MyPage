import styles from "@/styles/header.module.css"
import Link from 'next/link'
import Nav from "@/components/nav"

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" legacyBehavior   >
        <div className={styles.logo}>
          <span className={styles.portfolio}>Portfolio</span>
          <span className={styles.createdBy}> created by </span>
          <span className={styles.name}>Tsuyoshi Shoji</span>
        </div>
      </Link>

      <Nav />

    </header>
  );
}