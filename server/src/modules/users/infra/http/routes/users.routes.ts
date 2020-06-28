import { Router } from 'express';

import UsersController from '@modules/users/infra/http/controllers/usersController';

const usersController = new UsersController();

const userRouter = Router();

userRouter.post('/', usersController.create);

export default userRouter;
