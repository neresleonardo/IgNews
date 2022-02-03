import { NextApiRequest, NextApiResponse } from "next"

export default (request: NextApiRequest, response: NextApiResponse) => {
    const users = [ 
        { id: 1, name: 'John' },
        { id: 2, name: 'Leonardo' },
        { id: 3, name: 'Leks' },
        { id: 4, name: 'Natan' },
    ]
    
    return response.json(users)
}