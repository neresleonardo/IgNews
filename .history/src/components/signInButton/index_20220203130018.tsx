import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import styles from './styles.module.scss'
import { signIn } from 'next-auth/react'

export function SignInButton() {

    // Icon color
    const isUserLoggenIn = true;

    return isUserLoggenIn ? (

        <button type="button" className={styles.signInButton}>
            <FaGithub color="#04d361" />
            Leonardo Borges  
            <FiX color="#737380" className={styles.claseIcon} />
        </button> 

    ) : (

        <button type="button" onClick={() => signIn()} className={styles.signInButton}>
            <FaGithub color="#eba417" />
            Sing in with GitHub  
        </button>  

    );
}



