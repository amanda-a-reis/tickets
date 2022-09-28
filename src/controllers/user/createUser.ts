import MongooseMethods from '../../util/database/mongoose'
import { ICreateUser } from './InterfaceCreateUser'
import { IUser } from '../../models/user/InterfaceUser'
import { IResponse } from '../../util/http/http'
import Criptography from '../../criptography/hash/hash'
import { SUCCESS_USER, ERROR_USER } from '../../constants/user'


class CreateUser implements ICreateUser {

    createUser = async (req, res): Promise<IResponse> => {
        try {
            const user  = req.body as unknown as IUser

            const hash = new Criptography()
            user.password = await hash.hashPassword(user.password)

            const mongoose = new MongooseMethods()
            const newUser = await mongoose.createUser(user)

            return res.status(200).send({ msg: SUCCESS_USER})
        } catch (error) {
            console.log(error.messsage)
            return res.status(500).send({ msg: ERROR_USER })
        }
    }
}

export default CreateUser