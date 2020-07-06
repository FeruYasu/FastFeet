import { Router } from 'express';

import DeliveriesController from '@modules/deliveries/infra/http/controllers/deliveriesController';
import ensureAuthentication from '@modules/users/infra/http/middlewares/ensureAuthentication';

const deliveriesController = new DeliveriesController();

const deliveriesRouter = Router();

deliveriesRouter.post('/', ensureAuthentication, deliveriesController.create);

export default deliveriesRouter;
