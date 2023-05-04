import styles from '@/app/layout.module.scss'
import Footer from '@/components/footer/footer'
import NavBar from '@/components/navBar/navBar'

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => (
  <div className={styles.layout}>
    <NavBar />
    <body>{children}</body>
    <Footer />
  </div>
)
export default Layout
