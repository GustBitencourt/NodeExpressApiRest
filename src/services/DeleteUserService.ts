import { Usuario } from './../entities/Usuario';
import createConnection from "../database";
import { getRepository } from "typeorm";

interface IUser {
    id: string;
}

export class DeleteUserService {
    async execute({ id }: IUser) {
        const user = await getRepository(Usuario)
            .createQueryBuilder()
            .delete()
            .from(Usuario)
            .where('id = :id', { id })
            .execute();

        return user.raw;
    }    
}