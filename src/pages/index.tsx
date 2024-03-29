import { GetStaticProps } from 'next'
import Head from 'next/head'

import { SubscribeButton } from '../components/SubscribeButton'
import { stripe } from '../services/stripe'

import styles from './home.module.scss'

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  }
}

export default function Home({ product}: HomeProps) {

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
        <span>for {product.amount} month</span>
        </p>
        <SubscribeButton priceId={product.priceId} />
        </section>
        <img src="/images/avatar.svg" alt="avatar" />
      </main>
    </>
  )
}
// Estatico = GetStaticProps SSG | Static Site Generation (SSG)
// Dinamico = Faz todo processo quando visitado SSR | Server side Rendering (SSR)
export const getStaticProps: GetStaticProps = async () => {

const price = await stripe.prices.retrieve('price_1KOpvpKV0sVQodorOk9Om7MB')

   const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-Us', {
      style: 'currency',
      currency: 'USD'
    }).format(price.unit_amount! / 100),
   };

  return {
    props: {
      product,
  }, revalidate: 60 * 60* 24 //Uma Hora
  }
}