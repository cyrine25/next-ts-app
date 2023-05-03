import Link from 'next/link'
import styles from '@/styles/navBar.module.css'
type Props = {}

const navBar = (props: Props) => {
  return (
    <nav className={styles.nav}>
    <ul className={styles.menu}>
      <li >
        <Link href="/" className={styles.menuItem}>
          Home
        </Link>
      </li>
      
      <li>
        <Link href="/dashboard" className={styles.menuItem}>
        Dashboard
        </Link>
      </li>
      <li>
        <Link href="/questions" className={styles.menuItem}>
        Questions
        </Link>
      </li>
      <li>
        <Link href="/categories" className={styles.menuItem}>
        Categories
        </Link>
      </li>
    </ul>
  </nav>
  )
}

export default navBar