const CaheyKeyVal = require('./CaheyKeyVal')

module.exports = class CaheySession extends Map {
    constructor(timeout) {
        super()
        this.timeout = timeout
    }

    store(what, value) {
        this.set(what, new CaheyKeyVal(what, value))
        if (!value && !(typeof value == "boolean") && value != undefined) {
            console.warn(
                `CaheyWarning: Key ${what} has an invalid value! (CURRENT: ${this.grab(what)}). This will result in your renew function to be called until it returns a valid value! Disable this in setting by setting up "acceptInvalidValues" to "true"!`
            )
        }
    }

    grab(what) {
        return this.get(what).value
    }

    grabOrRenew(what, renewFunction) {
        let keyval = this.get(what)
        if (keyval.value) {
            if (new Date().getTime() - keyval.renewed.getTime() >= this.timeout) {
                const newval = renewFunction()
                if (newval == undefined) {
                    console.error("Your renew function CAN'T return undefined! I am going to return the old value set by \"store\" function which is " + keyval.value)
                    return keyval.value
                }
                this.store(keyval.key, newval)
                
                keyval.updateRenew()
                return this.grab(keyval.key)
            } else {
                return this.grab(keyval.key)
            }
        } else {
            const newval = renewFunction()
            if (newval == undefined) {
                console.error("Your renew function CAN'T return undefined! I am going to return the old value set by \"store\" function which is " + keyval.value)
                return keyval.value
            }
            this.store(keyval.key, newval)
            return this.grab(keyval.key)
        }
    }
}