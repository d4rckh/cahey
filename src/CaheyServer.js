const CaheyStore = require("./CaheyStore")

module.exports = class CaheyServer {
    constructor(settings) {
        
        this.cache = {
            store: new CaheyStore()
        }
    
    }

    getSession(sessionId) {
        return this.cache.store.getSession(sessionId)
    }

    createSession(sessionId, timeout) {
        return this.cache.store.createSession(sessionId, timeout)
    }

}