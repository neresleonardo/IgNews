import Prismic from '@prismicio/client'

export function getPrismicClient(req?: unknown) {
    const prismic = Prismic.client(
      process.env.PRISMIC_ENDPOOINT!,
      { 
        req,
        accessToken: process.env.PRISMIC_ACCESSS_TOKEN
      }
    )

    return prismic;
}
