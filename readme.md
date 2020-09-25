# Cahey
very pog cache key-value "database" 100% free and lightweight :)

example:
```js
const Cahey = require("cahey")
const Server = new Cahey.Server()
const Session = Server.createSession("mySession" /* name, usually it's an IP, so each IP has 1 second of cache! */, 1000 /* each 1 second refresh cache */)

const express = require("express")
Session.store("api-response", {a: new Date()})

const app = express()

app.get("/", (req, res) => {
    res.json(Session.grabOrRenew("api-response" /* key name */, () => {
        // this function refreshes the value each 1 second
        return {a: new Date()}
    }))
})

app.listen(1010)