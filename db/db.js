const StormDB = require("stormdb");

// start db with "./db.stormdb" storage location
const engine = new StormDB.localFileEngine("./maxdb.json");
const db = new StormDB(engine);

// Init defaults
db.default({
    clusters: []
})

db.save()

export default db