import { authMiddleware } from '@/auth/authMiddleware';
import { UserController } from '@/controllers/user.controllers';
import { Router } from 'express';

const userRouter = Router();
const userController = new UserController();

userRouter.get('/all', userController.getUsers);

userRouter.get('/:id', userController.getUserById);

userRouter.post('/register', userController.registerUser);

userRouter.post('/login', userController.loginUser);

userRouter.put('/:id',authMiddleware, userController.updateUser);

userRouter.delete('/:id',authMiddleware, userController.deleteUser);

export default userRouter;
