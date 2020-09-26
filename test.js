const Cahey = require("./src/cahey")
const Server = new Cahey.Server()
const Session = Server.createSession("127.0.0.1", 1000)

const express = require("express")

Session.store("api-response")

const app = express()

app.get("/", (req, res) => {
    res.json(Session.grabOrRenew("api-response", () => {
        return undefined
    }))
})

app.listen(1010)