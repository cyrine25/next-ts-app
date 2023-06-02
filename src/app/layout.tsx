import { Inter } from 'next/font/google'

import '@/styles/globals.scss'

import Footer from './components/footer/Footer'
import NavBar from './components/navBar/NavBar'
import styles from './Layout.module.scss'

interface Props {
  children: React.ReactNode
}
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})
const Layout = ({ children }: Props) => (
  <html lang="en" className={inter.className}>
    <body>
      <div className={styles.layout}>
        <NavBar />
        <div className={styles.contentLayout}>
          <div className={styles.mainContent}>
            <main>{children}</main>
          </div>
          <div className={styles.footerContent}>
            <Footer />
          </div>
        </div>
      </div>
    </body>
  </html>
)
export default Layout
