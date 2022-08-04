import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";


export class CreateUserController {

    handle(request: Request, response: Response) {

        const createUserService = new CreateUserService();
        
        const { name, email } = request.body;

        if(name.length === 0 || email.length === 0) {
            return response.status(400).json({ error: 'Preencha os dados corretamente' });
        }

        const user = createUserService.execute({ name, email });

        return response.status(201).json({user});
    }
}