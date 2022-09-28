import express from 'express'
import CreateUser from '../../controllers/user/createUser'
import verifyUser from '../../middlewares/user/verify_user'

const user = new CreateUser()

const routerUser = express.Router()

routerUser.post('/user', verifyUser, user.createUser)

export { routerUser }