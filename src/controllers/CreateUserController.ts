import { Request, Response } from "express";

export class CreateUserController {

    handle(request: Request, response: Response) {
        return response.json([
            { name: 'Joe'},
            { name: 'Bob'},
            { name: 'Mary'},
            { name: 'John'},
            { name: 'Jane'},
        ])
    }
}