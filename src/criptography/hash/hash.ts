import bcrypt from 'bcrypt'

class Criptography {

    async hashPassword (password: string): Promise<string> {
        const hashPassword = await bcrypt.hash(password, 15)
        return hashPassword
    }


}

export default Criptography