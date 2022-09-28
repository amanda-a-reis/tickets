
class Errors extends Error {
    error: Error

    constructor () {
        super()
        this.error = new Error()
    }

    async handleError (functionality) {
        if (!functionality) throw this.error
        return functionality
    }

}

export default Errors