import Link from 'next/link'

import styles from './navBar.module.scss'

const NavBar = () => (
  <nav className={styles.nav} data-cy="navbar">
    <ul className={styles.menu}>
      <li>
        <Link href="/" className={styles.menuItem}>
          Home
        </Link>
      </li>

      <li>
        <Link href={{ pathname: '/dashboard' }} className={styles.menuItem}>
          Dashboard
        </Link>
      </li>
      <li>
        <Link href={{ pathname: '/questions' }} className={styles.menuItem}>
          Questions
        </Link>
      </li>
      <li>
        <Link href={{ pathname: '/categories' }} className={styles.menuItem}>
          Categories
        </Link>
      </li>
    </ul>
  </nav>
)

export default NavBar
