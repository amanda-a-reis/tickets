import mongoose from 'mongoose'
import request from 'supertest'
import server from '../../index'
import { mockedUserVerify, mockedIncorrectUserVerify, mockedAlreadyExistsUserVerify } from '../../mocks/user/user'

jest.setTimeout(20000)
describe("middleware verify user", () => {
    it.concurrent("Should return 200 if the user is created with success", async () => {
        const res = await request(server)
            .post('/user')
            .send(mockedUserVerify)
        expect(res.status).toBe(200)
    })
    it.concurrent("Should return 500 if the user already exists", async () => {
        const res = await request(server)
            .post('/user')
            .send(mockedAlreadyExistsUserVerify)
        expect(res.status).toBe(500)
    })
    it.concurrent("Should return 500 if the user have incorrect values", async () => {
        const res = await request(server)
            .post('/user')
            .send(mockedIncorrectUserVerify)
        expect(res.status).toBe(500)
    })
})

afterAll(async () => {
    await mongoose.connection.close()
    server.close()
})