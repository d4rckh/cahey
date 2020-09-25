const CaheySession = require("./CaheySession")
const CaheySessionStore = require("./CaheySessionStore")

module.exports = class CaheyStore extends Map {
    constructor() {
        super()

        this.sessions = new CaheySessionStore()
    }

    getSession(sessionId) {
        return this.sessions.get(sessionId)
    }

    createSession(sessionId, timeout) {
        this.sessions.set(sessionId, new CaheySession(timeout))
        return this.getSession(sessionId)
    }
}