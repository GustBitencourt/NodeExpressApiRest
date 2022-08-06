import { getRepository } from 'typeorm';
import { Usuario } from '../entities/Usuario';

interface IUsers {
    id: string;
    name: string;
    email?: string;
}

export class UpdateUserService {
    async execute({ id, name, email }: IUsers) {
        const user = await getRepository(Usuario)
            .createQueryBuilder()
            .update()
            .set({
                name: name,
                email: email
            })
            .where('id = :id', { id })
            .execute();

        return user.raw;
    }
}