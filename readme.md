# Cahey
cache key-value "database" 100% free and lightweight :)

## Install
```
npm i cahey
```

## Tutorial
```js
// init the library
const Cahey = require("cahey")
```
```js
// create a new server
const Server = new Cahey.Server()
```
```js
// creat a new session which will most likely be set per IP
// first param is the name of it
// second param is the timeout of cache for every single key-value
const Session = Server.createSession("my-session", 1000/*ms*/)
```
```js
// import express
const express = require("express")
```
```js
// init the api-response variable, second param can be it's init value or by default it's undefined
Session.store("api-response")
```
```js
// creat a new express app
const app = express()
```
```js
// create a new route
app.get("/", (req, res) => {
    // this will grab or renew the api-response based on the timeout you set
    res.json(Session.grabOrRenew("api-response", () => {
        return {
            // here you can do some database querying or whatever, ill put some dummy data
            numbers: [
                "1", "2", "7", "10"
            ]
        }
    }))
})
```
```js
// listen to requests
app.listen(1010)
```

Now when you go to the `/` of your web server, the renew function will be called every single second! You can make the timeout higher for less calls of your renew function! Have fun