import { Request, Response, Router } from 'express';
import { CreateUserController } from './controllers/CreateUserController';

export const router = Router();
const createUserController = new CreateUserController();

router.get('/', (request: Request, response: Response) => {

    return response.json({ message: 'Welcome to my aplication' });
});

router.post('/users', createUserController.handle)