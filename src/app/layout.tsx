import { Inter } from 'next/font/google'
import React from 'react'

import styles from './layout.module.scss'

import '@/styles/globals.scss'
import Footer from '@/components/footer/Footer'
import NavBar from '@/components/navBar/NavBar'

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
        <main>{children}</main>

        <Footer />
      </div>
    </body>
  </html>
)
export default Layout
