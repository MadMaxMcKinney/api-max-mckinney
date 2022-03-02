import { Cluster, PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient()

export default async function handler(req:NextApiRequest, res:NextApiResponse) {

    switch(req.method) {
 
        case "POST":
            let cluster:Cluster = await prisma.cluster.create({
                data: {
                    severity: req.query.severity.toString(),
                    comments: req.query.comments.toString(),
                    date: req.query.date.toString()
                }
            })
            res.status(200).json(cluster)
            break;

        case 'GET':
            if(prisma.cluster) {
                res.status(200).json(await prisma.cluster.findMany())
            } else {
                res.status(404).json({message: "No clusters"})
            }
            break;

    }
}
