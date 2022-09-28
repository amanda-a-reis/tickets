export interface IUser {
    name: string,
    email: string,
    password: string,
    phone?: string,
    address?: string,
    creditCard?: string,
    createdAt: Date,
}