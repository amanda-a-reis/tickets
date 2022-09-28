export interface ICriptography {
    hashPassword (password: string): Promise<string>
}