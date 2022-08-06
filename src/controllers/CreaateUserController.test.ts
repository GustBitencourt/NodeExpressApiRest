import { CreateUserController } from './CreateUserController';
describe('CreateUserController', () => {
    
    it('Deve retornar o ID do usuário criado: ', () => {
        const createUseController = new CreateUserController();

        const result = createUseController.handle()
        
    })
})