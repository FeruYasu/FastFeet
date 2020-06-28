import { Router } from 'express';

import DeliveriesController from '@modules/deliveries/infra/http/controllers/deliveriesController';

const deliveriesController = new DeliveriesController();

const deliveriesRouter = Router();

deliveriesRouter.post('/', deliveriesController.create);

export default deliveriesRouter;
