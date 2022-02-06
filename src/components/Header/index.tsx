import { SignInButton } from '../signInButton'
import styles from './styles.module.scss'

export function Header() {
    return(
        <header className={styles.heandleContainer}>
            <div className={styles.heandleContent}>

                <img src="/images/logo.svg" alt="LogoImg" />
                <nav>
                <a className={styles.active} href="/">Home</a>  
                <a href="/posts">Posts</a> 

                </nav>

                <SignInButton />
            </div>
        </header>
    )
}