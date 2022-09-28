import { IResponse } from "../../util/http/http"

export interface ICreateUser {
    createUser (req, res): Promise<IResponse>
}