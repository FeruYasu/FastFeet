import { Router } from 'express';

import deliveriesRouter from '@modules/deliveries/infra/http/routes/deliveries.routes';
import usersRouter from '@modules/users/infra/http/routes/users.routes';
import recipientsRouter from '@modules/recipients/infra/http/routes/recipients.routes';
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';
import couriersRouter from '@modules/couriers/infra/http/routes/couriers.routes';
import deliveryProblemsRouter from '@modules/delivery_problems/infra/http/routes/deliveryProblems.routes';
import courierSessionsRouter from '@modules/couriers/infra/http/routes/sessions.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/deliveries', deliveriesRouter);
routes.use('/recipients', recipientsRouter);
routes.use('/couriers', couriersRouter);
routes.use('/deliveryproblems', deliveryProblemsRouter);
routes.use('/couriersessions', courierSessionsRouter);

export default routes;
