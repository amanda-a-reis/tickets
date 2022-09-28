interface send {
    send (value: object): IResponse
}

export interface IResponse {
    status (value: number): send,
}

export interface IRequest {
    body: string,
    headers: string,
    params: string
}