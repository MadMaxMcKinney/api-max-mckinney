// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {clusterDB} from '../../db/db'

export default async function handler(req, res) {

    await clusterDB.read()

    switch(req.method) {

        case 'POST':
            let newCluster = {severity: req.query.severity, comments: req.query.comments, date: req.query.date}
            clusterDB.data.clusters.push(newCluster)
            clusterDB.write()
            res.status(200).json({status: "Success", cluster: newCluster})
            break;

        case 'GET':
            if(clusterDB.data.clusters) {
                res.status(200).json(clusterDB.data.clusters)
            } else {
                res.status(404).json({status: "404"})
            }
            break;

    }
}
