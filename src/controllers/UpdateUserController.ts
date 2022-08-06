import { Request, Response } from "express";
import { UpdateUserService } from "../services/UpdateUserService";

export class UpdateUserController {
    async handle(request: Request, response: Response) {
        const updateUserService = new UpdateUserService();

        const { id, name, email } = request.body;

        if(!id) {
            return response.status(400).json({
                mensagem: "id não informado"
            });
        }

        if(!name) {
            return response.status(400).json({
                mensagem: "Nome não informado"
            });
        }

        await updateUserService.execute({ id, name, email });

        return response.status(204);
    }
}