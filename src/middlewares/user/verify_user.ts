import validator from 'validator'
import { ERROR_USER } from '../../constants/user'
import MongooseMethods from '../../util/database/mongoose'

const verifyUser = async (req, res, next) => {
    const user = req.body

    const mongoose = new MongooseMethods()

    const isUserAlreadyExists = await mongoose.findUser(user.email)
    if(isUserAlreadyExists) return res.status(500).send({ msg: ERROR_USER })

    const isName = (user.name.length < 50) && (user.name.length > 10)
    const isEmail = validator.isEmail(user.email)
    const isStrongPassword = validator.isStrongPassword(user.password)
    const isPhone = validator.isMobilePhone(user.phone)
    const isAddress = user.address.length > 10 && user.address.length < 50
    const isCreditCard = user.creditCard.length >= 13 && user.creditCard.length <= 16
    const objectSize = (Object.keys(user)).length <= 7

    if (isName && isEmail && isStrongPassword && isPhone && isAddress && isCreditCard && objectSize) return next()
    return res.status(500).send({ msg: ERROR_USER })

}

export default verifyUser