import { NextApiRequest, NextApiResponse } from 'next';
import { cluster } from '../../lib/dataModels';
import {collection, getDocs, doc, addDoc, Timestamp} from 'firebase/firestore'
import {db} from '../../lib/firebase'

export default async function Handler(req:NextApiRequest, res:NextApiResponse) {

    switch(req.method) {

        case "POST":
            try {
                // New cluster to add
                const newCluster:cluster = {
                    severity: req.query.severity.toString(),
                    description: req.query.description.toString(),
                    occurredAt: Timestamp.fromDate(new Date(req.query.occurredAt.toString()))
                }
                
                // Add new doc
                await addDoc(collection(db, "clusters"), newCluster)
                
                res.status(200).send(newCluster)
            } catch(e) {
                res.status(400).send("There was an issue: " + e)
            }
            
            break;

        case 'GET':
            const querySnapshop = await getDocs(collection(db, "clusters"))

            let dbValues = []

            querySnapshop.forEach((doc) => {
                // Expand the cluster object and covert the Firestore Timestamp type to JS Stringed Date
                const formattedCluster:cluster = {
                    id: doc.id,
                    ...doc.data() as cluster,
                    occurredAt: doc.data().occurredAt.toDate().toDateString()
                }
                dbValues.push(formattedCluster)
            })

            res.status(200).send(dbValues)
            break;

    }
}
