import { GetServerSideProps } from "next"
import { getSession } from "next-auth/react"
import { RichText } from "prismic-dom"
import { getPrismicClient } from "../../services/prismic"

interface Post {
    post: {
        slug: string,
        title: string,
        content: string,
        updatedAt: string,
    }
}

interface PostProps {
    posts: Post[]
}

export default function Post({ posts }: PostProps){
    return(
        <h1>Teste</h1>
    )
}

export const getServerSideProps: GetServerSideProps = async ({req, params}) => {
    const session = await getSession({ req })
    const { slug } = params!;

    const prismic = getPrismicClient(req)

    const response = await prismic.getByUID<any>('post', String(slug), {})

    const post = {
        slug,
        title: RichText.asText(response.data.title),
        content: RichText.asHtml(response.data.content),
        updatedAt: new Date(response.last_publication_date!).toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        })
    }

    return {
        props: {
            post
        }
    }
}