module.exports = class CaheyKeyVal {
    constructor(key, value) {
        this.key = key
        this.value = value
        this.renewed = null
        this.updateRenew()
    }

    updateRenew() {
        this.renewed = new Date()
    } 
}