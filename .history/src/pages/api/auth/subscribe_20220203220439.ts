import { NextResponse, NextRequest } from "next/server";

export default async (req: NextRequest, res: NextResponse) => {
    if (req.method === "POST"){

    } else {
        res.setHeader("Allow", 'POST')
    }
}