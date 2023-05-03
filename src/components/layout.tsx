import styles from '@/styles/layout.module.css'

type MyComponentProps = React.PropsWithChildren<{}>;

export default function Layout({ children }: MyComponentProps) {

    return <div className={styles.layout}>
        <main>{children}</main>
    </div>
}
