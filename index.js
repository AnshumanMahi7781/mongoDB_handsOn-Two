const express = require("express");
const {dbConnection, dataBaseName} = require("./config/dbConnection");
const questionRoute = require("./route/questionRoute");
const appServer = express();
const cors = require("cors");

appServer.use(express.json());

appServer.use(cors({
    origin: "*"
}));

appServer.use(questionRoute)

appServer.listen(5000, async () => {
    try {
        await dbConnection()
        console.log("Server is started successfully")
    } catch (err) {
        console.log(`Server is Failed to start : ${err}`)
    }
})