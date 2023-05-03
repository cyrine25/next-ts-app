import styles from '@/styles/layout.module.css'
import NavBar from '@/components/navBar';
import Footer from '@/components/footer';
type MyComponentProps = React.PropsWithChildren<{}>;

export default function Layout({ children }: MyComponentProps) {

    return <div className={styles.layout}>
        <NavBar/>
        <main>{children}</main>
        <Footer/>
    </div>
}
