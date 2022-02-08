import { GetStaticPaths, GetStaticProps } from "next"
import Head from "next/head"
import { RichText } from "prismic-dom"
import styles from '../post.module.scss'
import { getPrismicClient } from "../../../services/prismic"
import Link from "next/link"
import { useSession } from "next-auth/react"
import { useEffect } from "react"
import { useRouter } from "next/router"

interface PostPropsPreiview {
  post: {
    slug: string,
    title: string,
    content: string,
    updatedAt: string,
  }
}


export default function PostPreview({ post }: PostPropsPreiview) {
  const { data: session } = useSession();
  const router = useRouter()

  useEffect(() => {
    if (session?.activeSubscription) {
      router.push(`/posts/${post.slug}`)
    }
  }, [session])

  return (
    <>
      <Head>
        <title>{post.title} | ignews</title>
      </Head>

      <main className={styles.container}>
        <article className={styles.post}>
          <h1>{post.title}</h1>
          <time>{post.updatedAt}</time>
          <div
            className={`${styles.postContent} ${styles.previwContent}`}
            dangerouslySetInnerHTML={{ __html: post.content }} />

          <div className={styles.continueReading}>
            Quer continuar lendo?
            <Link href="/">
              <a href="/">Inscreva-se Agora 💜</a>
            </Link>
          </div>
        </article>
      </main>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {

  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({
  params,
}) => {
  const { slug } = params!;

  const prismic = getPrismicClient();

  const response = await prismic.getByUID<any>('post', String(slug), {});

  const post = {
    slug,
    title: RichText.asText(response.data.title),
    content: RichText.asHtml(response.data.content.splice(0, 3)),
    updatedAt: new Date(response.last_publication_date!).toLocaleDateString(
      'pt-BR',
      {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      }
    ),
  };

  return {
    props: {
      post,
    },
    redirect: 60 * 30 // 30 Minutos
  };
};
