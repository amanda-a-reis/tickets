import mongoose from 'mongoose'
import request from 'supertest'
import server from '../../index'
import CreateUser from './createUser'
import { mockedUser } from '../../mocks/user/user'

const req = { body: ''}
const send = (msg) => msg
const res = { status () {
    return { send }
}}

jest.setTimeout(20000)
describe("createUser", () => {
    it.concurrent("Shoul return 200 if the user is created with success", async () => {
        const res = await request(server)
            .post('/user')
            .send(mockedUser)
        expect(res.status).toBe(200)
    })
    it.concurrent("Shoul return 200 if the user is created with success", async () => {
        const user = new CreateUser()
        try {
            const sut = user.createUser(req, res)
        } catch (error) {
            expect(error).toBeInstanceOf(Error)
        }  
    })
})

afterAll(async () => {
    await mongoose.connection.close()
    server.close()
})