import Errors from './errors'

const isEven = (a) => {
    if (a % 2 === 0) return true
    return false
}

describe("Errors", () => {
    it("Should return error if functionality is wrong", async () => {
        const errors = new Errors()
        try {
            const sut = await errors.handleError(isEven(3))
        } catch (error) {
            expect(error).toBeInstanceOf(Error)
        }
    })
})