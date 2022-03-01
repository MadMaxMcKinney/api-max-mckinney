// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
try {
    import db from '../../db/db'
} catch (e) {
    console.log(e)
}

export default function handler(req, res) {

    switch(req.method) {

        case 'POST':
            try {
                let newCluster = {severity: req.query.severity, comments: req.query.comments, date: req.query.date}

                db.get("clusters").push(newCluster)
                db.save()
                
                res.status(200).json({status: "Success", cluster: newCluster})
            } catch (e) {
                console.log("In post")
                console.log(e)
            }
            break;

        case 'GET':
            try {
                if(db.get("clusters")) {
                    res.status(200).json(db.get("clusters").value())
                } else {
                    res.status(404).json({status: "404"})
                }
            } catch (e) {
                console.log("In post")
                console.log(e)
            }
            break;

    }
}
