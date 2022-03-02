import {Low, JSONFileSync} from 'lowdb'

// Cluster DB Setup
const adapter = new JSONFileSync('./cluster-db.json')
const clusterDB = new Low(adapter)

// Initialize if empty
clusterDB.read()
clusterDB.data ||= { clusters: [] }
clusterDB.write()

export {clusterDB}