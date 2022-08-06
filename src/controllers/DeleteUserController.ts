import { DeleteUserService } from './../services/DeleteUserService';
import { Request, Response } from "express";

export class DeleteUserController {
    async handle(request: Request, response: Response) {
        const deleteUserService = new DeleteUserService();

        const { id } = request.params;

        if (!id) {
            return response.status(400).json({mensagem: "Id não informado"});
        }

        await deleteUserService.execute({ id });

        return response.status(204).json();
    }
}