import { Request, Response } from "express";

export class CreateUserController {

    handle(request: Request, response: Response) {
        
        const { name, email } = request.body;

        return response.json({ message: `Usuário: ${name} criado com sucesso` });
    }
}