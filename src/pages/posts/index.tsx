
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { getPrismicClient } from '../../services/prismic';
import styles from './home.module.scss'
import Prismic from '@prismicio/client'

export default function Posts() {
    return(
        <>
        <Head>
           <title>Posts | ignews </title> 
        </Head>

        <main className={styles.container}>
            <div className={styles.posts}>
                <a href="#">
                    <time>12 de dezembro de 2022</time>
                    <strong>Criando sites com next.js</strong>
                    <p> sdfsafd dsfdsgfafgsadg  asfdsfasdfdsf  asdfasdfdsafasdf sadfasdfdsa </p>
                </a>

                <a href="#">
                    <time>12 de dezembro de 2022</time>
                    <strong>Criando sites com next.js</strong>
                    <p> sdfsafd dsfdsgfafgsadg  asfdsfasdfdsf  asdfasdfdsafasdf sadfasdfdsa </p>
                </a>

                <a href="#">
                    <time>12 de dezembro de 2022</time>
                    <strong>Criando sites com next.js</strong>
                    <p> sdfsafd dsfdsgfafgsadg  asfdsfasdfdsf  asdfasdfdsafasdf sadfasdfdsa </p>
                </a>

                <a href="#">
                    <time>12 de dezembro de 2022</time>
                    <strong>Criando sites com next.js</strong>
                    <p> sdfsafd dsfdsgfafgsadg  asfdsfasdfdsf  asdfasdfdsafasdf sadfasdfdsa </p>
                </a>

                <a href="#">
                    <time>12 de dezembro de 2022</time>
                    <strong>Criando sites com next.js</strong>
                    <p> sdfsafd dsfdsgfafgsadg  asfdsfasdfdsf  asdfasdfdsafasdf sadfasdfdsa </p>
                </a>
            </div>
        </main>
        </>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const prismic = getPrismicClient()

    const response = await prismic.query([
        Prismic.predicates.at('document.type', 'Publication')
    ], {
       fetch: ['Publication.title', 'Publication.content'],
       pageSize: 100,
    })

    console.log(response);
    
    
    return {
        props: {}
    }
}