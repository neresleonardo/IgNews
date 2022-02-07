import { SignInButton } from '../signInButton'
import styles from './styles.module.scss'
import { ActiveLink } from '../ActiveLink'

export function Header() {

    return(
        <header className={styles.heandleContainer}>
            <div className={styles.heandleContent}>

                <img src="/images/logo.svg" alt="LogoImg" />
                <nav>
                <ActiveLink activeClassName={styles.active} href="/">
                <a>Home</a> 
                </ActiveLink>
                <ActiveLink activeClassName={styles.active} href="/posts" prefetch>
                <a> Posts</a> 
                </ActiveLink >
                </nav>

                <SignInButton />
            </div>
        </header>
    )
}