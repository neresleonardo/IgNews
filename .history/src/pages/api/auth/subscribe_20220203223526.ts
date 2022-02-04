import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../../services/stripe";
import {getSession} from 'next-auth/react' ;

export default async (req: NextApiRequest, res: NextApiResponse ) => {

    if (req.method === "POST"){
        const session = await getSession({req })

        const stripeCustomer = await stripe.customers.create({
            email: session?.user?.email!,
            // metadata
        })
    

    const stripeCheckoutSessions = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        billing_address_collection: 'required',
        line_items: [
            { price: 'price_1KOpvpKV0sVQodorOk9Om7MB', quantity: 1 }
        ],
        mode: 'subscription',
        allow_promotion_codes: true,
        success_url: process.env.STRIPE_SUCCESS_URL!,
        cancel_url: process.env.STRIPE_CANCEL_URL!,
    })

    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method not allowed')
    }
}