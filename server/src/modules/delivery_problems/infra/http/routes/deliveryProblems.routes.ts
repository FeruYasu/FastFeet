import { Router } from 'express';

import DeliveryProblemsController from '@modules/delivery_problems/infra/http/controllers/deliveryProblemsController';
import ensureAuthentication from '@modules/users/infra/http/middlewares/ensureAuthentication';

const deliveryProblemsController = new DeliveryProblemsController();

const deliveryProblemsRouter = Router();

deliveryProblemsRouter.use(ensureAuthentication);
deliveryProblemsRouter.post('/', deliveryProblemsController.create);

export default deliveryProblemsRouter;
