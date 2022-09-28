import User from "../../models/user/User";
import { IUser } from '../../models/user/InterfaceUser'
import Errors from "../errors/errors";

class MongooseMethods {
    errors: Errors

    constructor () {
        this.errors = new Errors()
    }
 
    async createUser (user: IUser) {
        return this.errors.handleError(await User.create(user))
    }

    async findUser (email: IUser) {
        return await User.findOne({ email })
    }
}

export default MongooseMethods