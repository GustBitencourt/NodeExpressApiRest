import { CreateUserService } from './CreateUserService';
import { getConnection } from "typeorm";
import createConnection from "../database";
import { v4 as uuid } from "uuid";

describe("CreateUserService", () => {
    beforeAll(async () => {
        const connection = await createConnection();
        await connection.runMigrations();
    })

    afterAll(async () => {
        const connection = getConnection();

        //apaga dados do banco teste
        await connection.query('DELETE FROM usuarios');
        await connection.close();
    })

    it('Deve retornar o id do usário criado', async () => {
        const createUserService = new CreateUserService();

        const result = await createUserService.execute({
            id: uuid(),
            name: 'Teste',
            email: 'email@email.com'
        })

        expect(result).toHaveProperty('id');
    })
})