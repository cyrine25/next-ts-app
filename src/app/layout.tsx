import styles from './layout.module.scss'

import Footer from '@/components/footer/Footer'
import NavBar from '@/components/navBar/NavBar'

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => (
  <html lang="en">
    <body>
      <div className={styles.layout}>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </div>
    </body>
  </html>
)
export default Layout
