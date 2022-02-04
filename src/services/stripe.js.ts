import { loadStripe} from  '@stripe/stripe-js'

export async function getStripejS() {
    const stripeJs = await loadStripe(process.env.NEXT_PUBLIC_STIPE_PUBLIC_KEY!)

    return stripeJs
}