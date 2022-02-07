
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { getPrismicClient } from '../../services/prismic';
import styles from './home.module.scss'
import Prismic from '@prismicio/client'
import { RichText } from 'prismic-dom'

type Post = {
    slug: string;
    title: string;
    excerpt: string;
    updated: string;
}

interface PostsProps{
    posts: Post[];
}

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

    const response = await prismic.query<any>([
        Prismic.predicates.at('document.type', 'Publication')
    ], {
       fetch: ['Publication.title', 'Publication.content'],
       pageSize: 100,
    })

    console.log(response);
    
    const posts = response.results.map(post => {
        return {
            slug: post.uid,
            title: RichText.asText(post.data.title),
            excerpt: post.data.content.find(content => content.type === 'paragraph')?.text ?? '',
            updatedAt: new Date(post.last_publication_date!).toLocaleDateString('pt-BR',{
                day:'2-digit',
                month:'long',
                year:'numeric'
            })
            };
        });
    
    return {
        props:{posts}
 
 
    }
} 
