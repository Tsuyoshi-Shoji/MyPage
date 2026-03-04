import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from "@/styles/nav.module.css"

export default function Nav() {
  const router = useRouter()

  const isActive = (href) => {
    return router.pathname === href
  }

  return (
    <div>
      <nav className={styles.nav}>
        <li className={isActive('/profile') ? styles.active : ''}>
          <Link href="/profile">
            Profile
          </Link>
        </li>
        <li className={isActive('/career') ? styles.active : ''}>
          <Link href="/career">
            Career
          </Link>
        </li>
        <li className={isActive('/works') ? styles.active : ''}>
          <Link href="/works">
            Works
          </Link>
        </li>
        <li className={isActive('/contact') ? styles.active : ''}>
          <Link href="/contact">
            Contact
          </Link>
        </li>
      </nav>
    </div>
  );
}