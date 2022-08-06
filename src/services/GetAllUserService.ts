import { getRepository } from 'typeorm';
import { Usuario } from './../entities/Usuario';


export class GetAllUserService {
    async execute() {
        const allUsers = await getRepository(Usuario)
            .createQueryBuilder('usuarios')
            .select()
            .getMany();

        return allUsers;
    }
    
}