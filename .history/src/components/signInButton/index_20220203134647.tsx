import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import styles from './styles.module.scss'
import {signOut, signIn, useSession } from 'next-auth/react'

export function SignInButton() {

    // Icon color
    const { data: session } = useSession()

    console.log(session);
    

    return session ? (

        <button type="button" onClick={() =>signOut()} className={styles.signInButton}>
            <FaGithub color="#04d361" />
            <img src={session.user?.image} alt="" />
            {session.user?.name}
            <FiX color="#737380" className={styles.claseIcon} />
        </button> 

    ) : (

        <button type="button" onClick={() => signIn('github')} className={styles.signInButton}>
            <FaGithub color="#eba417" />
            Sing in with GitHub  
        </button>  

    );
}



