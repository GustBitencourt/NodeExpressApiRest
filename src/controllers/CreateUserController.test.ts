import { CreateUserController } from './CreateUserController';
import { Request } from 'express';
import { getConnection } from 'typeorm';

import createConnection from '../database';
import { makeMockResponse } from '../utils/mocks/makeMockResponse';


describe('CreateUserController', () => {
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

    const createUseController = new CreateUserController();
    
    const response = makeMockResponse();

    it('Deve retornar o status 201 quando o usuário for criado: ', async () => {
        const request = {
            body: {
                name: 'Teste',
                email: 'email@email.com'
            }
        } as Request;


        await createUseController.handle(request, response);        
        
        expect(response.state.status).toBe(201);        
    })

    it('Deve retornar o status 201 quando o usuário for criado com o email vazio: ', async () => {
        const request = {
            body: {
                name: 'Teste',
                email: ''
            }
        } as Request;


        await createUseController.handle(request, response);        
        
        expect(response.state.status).toBe(201);        
    })

    it('Deve retornar o status 400 quando o usuário não for criado: ', async () => {
        const request = {
            body: {
                name: '',
                email: '',
            }
        } as Request;

        await createUseController.handle(request, response);

        expect(response.state.status).toBe(400);
    })
})