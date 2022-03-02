import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res) {

    switch(req.method) {

        case 'GET':
            if(prisma.cluster) {
                res.status(200).json(await prisma.cluster.findMany())
            } else {
                res.status(404).json({status: "404"})
            }
            break;

    }
}
