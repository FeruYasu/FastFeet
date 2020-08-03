import { Router } from 'express';

import uploadConfig from '@config/upload';

import DeliveriesController from '@modules/deliveries/infra/http/controllers/deliveriesController';
import CancelDeliveryController from '@modules/deliveries/infra/http/controllers/cancelDeliveryController';
import ConfirmDeliveryController from '@modules/deliveries/infra/http/controllers/confirmDeliveryController';
import ensureAuthentication from '@modules/users/infra/http/middlewares/ensureAuthentication';

import multer from 'multer';

const deliveriesController = new DeliveriesController();
const cancelDeliveryController = new CancelDeliveryController();
const confirmDeliveryController = new ConfirmDeliveryController();

const deliveriesRouter = Router();

const upload = multer(uploadConfig.multer);

deliveriesRouter.use(ensureAuthentication);
deliveriesRouter.post('/', deliveriesController.create);
deliveriesRouter.get('/', deliveriesController.index);
deliveriesRouter.get('/:id', deliveriesController.show);
deliveriesRouter.delete('/:id', deliveriesController.destroy);
deliveriesRouter.put('/:id', deliveriesController.update);

deliveriesRouter.post('/cancel/:id', cancelDeliveryController.create);
deliveriesRouter.post(
  '/confirm/:id',
  upload.single('signature'),
  confirmDeliveryController.create,
);

export default deliveriesRouter;
