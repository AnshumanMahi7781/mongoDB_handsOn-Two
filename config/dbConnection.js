const { MongoClient } = require("mongodb");
const mongoURL = "mongodb://127.0.0.1:27017";
const mongoServer = new MongoClient(mongoURL);

const dbConnection = async () => {
    try {
        await mongoServer.connect();
        console.log("CONNECTED SUCCESSFULLY");
    } catch (err) {
        console.log(`Something went wrong in the mongo Connection : ${err}`);
    }
}

const dataBaseName = mongoServer.db("Human_Resource");
module.exports = {dbConnection, dataBaseName}