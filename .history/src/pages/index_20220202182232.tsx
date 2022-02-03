import { GetServerSideProps } from 'next'
import Head from 'next/head'

import { SubscribeButton } from '../components/SubscribeButton'

import styles from './home.module.scss'

export default function Home() {

  return (
    <>
      <Head>
        <title>Inicio | ig News</title>
      </Head>

      <main className={styles.contentContainer}>

        <section className={styles.hero}>
        <span >🤙 hey, Welcome</span>
        <h1>News about the <span>React</span> World</h1>

        <p>Get access to all the publications<br/>
        <span>for $9,90 month</span>
        </p>
        <SubscribeButton />
        </section>
        <img src="/images/avatar.svg" alt="avatar" />
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  console.log('OK');
  
  return {
    props: {
    nome:'Diego'
  }
  }
}