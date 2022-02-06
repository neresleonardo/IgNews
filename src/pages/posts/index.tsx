
import Head from 'next/head';
import styles from './home.module.scss'

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