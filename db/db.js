try {
import StormDB from "stormdb";

// start db with "./db.stormdb" storage location
const engine = new StormDB.localFileEngine("./maxdb.json");
const db = new StormDB(engine);

// Init defaults
db.default({
    clusters: []
})

db.save()
}
catch (e) {
    console.log(e)
}
export default db