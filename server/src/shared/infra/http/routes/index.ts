import { Router } from 'express';

import deliveriesRouter from '@modules/deliveries/infra/http/routes/deliveries.routes';
import usersRouter from '@modules/users/infra/http/routes/users.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/deliveries', deliveriesRouter);

export default routes;
