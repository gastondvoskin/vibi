import { authMiddleware } from '@/auth/authMiddleware';
import { UserController } from '@/controllers/user.controllers';
import { Router } from 'express';

const userRouter = Router();
const userController = new UserController();

userRouter.get('/all', userController.getUsers);
userRouter.post('/', userController.registerUser)


export default userRouter;
