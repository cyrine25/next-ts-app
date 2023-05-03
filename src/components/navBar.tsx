import Link from 'next/link'
import styles from '@/styles/navBar.module.css'
type Props = {}

const navBar = (props: Props) => {
  return (
    <nav className={styles.nav}>
    <ul className={styles.menu}>
      <li className={styles.menuItem}>
        <Link href="/">
          Home
        </Link>
      </li>
      <li>
        <Link href="/about">
          About
        </Link>
      </li>
      <li>
        <Link href="/navigationPages/firstPage">
          First Page
        </Link>
      </li>
      <li>
        <Link href="/navigationPages/secondePage">
          Seconde Page
        </Link>
      </li>
    </ul>
  </nav>
  )
}

export default navBar