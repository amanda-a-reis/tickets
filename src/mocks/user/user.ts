import crypto from 'crypto'

const generateRandom = () => {
    const UUID = crypto.randomUUID().substring(0, 7)
    return UUID
}

export const mockedUser = {
    name: 'Mocked User Name',
    email: `${generateRandom()}@mail.com`,
    password: 'Pass123**',
    phone: '99999999999',
    address: 'Rua A, 500, Bairro São João',
    creditCard: '1234567890123',
    createdAt: '09-25-2022',
}

export const mockedUserVerify = {
    name: 'Mocked User Name',
    email: `${generateRandom()}@mail.com`,
    password: 'Pass123**',
    phone: '99999999999',
    address: 'Rua A, 500, Bairro São João',
    creditCard: '1234567890123',
    createdAt: '09-25-2022',
}

export const mockedIncorrectUserVerify = {
    name: 'Mocked User Name',
    email: '',
    password: '',
    phone: '',
    address: 'Rua A, 500, Bairro São João',
    creditCard: '1234567890123',
    createdAt: '09-25-2022',
}

export const mockedAlreadyExistsUserVerify = {
    name: 'Mocked User Name',
    email: 'user@mail.com',
    password: 'Pass123**',
    phone: '99999999999',
    address: 'Rua A, 500, Bairro São João',
    creditCard: '1234567890123',
    createdAt: '09-25-2022',
}