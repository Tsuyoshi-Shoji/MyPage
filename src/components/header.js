import styles from "@/styles/header.module.css"
import Link from 'next/link'
import Nav from "@/components/nav"

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" legacyBehavior   >
        <div className={styles.logo}>
          <span className={styles.made}>MADE</span>{' '}
          <span className={styles.by}> By </span>
          <span className={styles.Tsuyoshi}>Tsuyoshi Shoji</span>
        </div>
      </Link>

      <Nav />

    </header>
  );
}