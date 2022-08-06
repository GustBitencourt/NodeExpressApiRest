import { Request, Response, Router } from 'express';
import { CreateUserController } from './controllers/CreateUserController';
import { GetAllUsersController } from './controllers/GetAllUsersController';
import { UpdateUserController } from './controllers/UpdateUserController';
import { DeleteUserController } from './controllers/DeleteUserController';

export const router = Router();
const createUserController = new CreateUserController();
const getAllUsersController = new GetAllUsersController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();

router.get('/', (request: Request, response: Response) => {

    return response.json({ message: 'Welcome to my aplication' });
});

router.post('/users', createUserController.handle);
router.get('/users', getAllUsersController.handle);
router.patch('/user', updateUserController.handle);
router.delete('/user/:id', deleteUserController.handle);
