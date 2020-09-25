const CaheyKeyVal = require('./CaheyKeyVal')

module.exports = class CaheySession extends Map {
    constructor(timeout) {
        super()
        this.timeout = timeout
    }

    store(what, value, expiry) {
        this.set(what, new CaheyKeyVal(what, value, expiry))
    }

    grab(what) {
        return this.get(what).value
    }

    grabOrRenew(what, renewFunction) {
        let keyval = this.get(what)
        if (new Date().getTime() - keyval.renewed.getTime() >= this.timeout) {
            this.store(keyval.key, renewFunction())
            keyval.updateRenew()
            return this.grab(keyval.key)
        } else {
            return this.grab(keyval.key)
        }
    }
}