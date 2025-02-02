import Link from 'next/link'
import styles from "@/styles/nav.module.css"

export default function Nav() {
  return (
    <div>
      <nav className={styles.nav}>
        <li>
          <Link href="/profile">
            Profile
          </Link>
        </li>
        <li>
          <Link href="/career">
            Career
          </Link>
        </li>
        <li>
          <Link href="/deliverable">
            Deliverable
          </Link>
        </li>
        <li>
          <Link href="/contact">
            Contact
          </Link>
        </li>
      </nav>
    </div>
  );
}