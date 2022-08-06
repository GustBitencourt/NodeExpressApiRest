import { Request, Response, Router } from 'express';
import { CreateUserController } from './controllers/CreateUserController';
import { GetAllUsersController } from './controllers/GetAllUsersController';

export const router = Router();
const createUserController = new CreateUserController();
const getAllUsersController = new GetAllUsersController();

router.get('/', (request: Request, response: Response) => {

    return response.json({ message: 'Welcome to my aplication' });
});

router.post('/users', createUserController.handle)

router.get('/users', getAllUsersController.handle)

