import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse ) => {

    if (req.method === "POST"){

    } else {
        res.setHeader('Allow', 'POST');
    }
}