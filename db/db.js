const StormDB = require("stormdb");

try {
    // start db with "./db.stormdb" storage location
    const engine = new StormDB.localFileEngine("./maxdb.json");
    const db = new StormDB(engine);

    // Init defaults
    db.default({
        clusters: []
    })

    db.save()
} catch (error) {
    console.log("Error in db.js")
    console.log(error)
}

export default db