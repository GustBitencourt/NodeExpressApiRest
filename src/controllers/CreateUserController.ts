import { Request, Response } from "express";
import { v4 as uuid } from "uuid";
import { CreateUserService } from "../services/CreateUserService";


export class CreateUserController {

    async handle(request: Request, response: Response) {

        const createUserService = new CreateUserService();
        
        const id = uuid();
        const { name, email } = request.body;

        if(name.length === 0) {
            return response.status(400).json({ error: 'Preencha o nome corretamente' });
        }

        const user = await createUserService.execute({ id, name, email });

        return response.status(201).json(user);
    }
}