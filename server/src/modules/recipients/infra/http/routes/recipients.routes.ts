import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthentication';
import RecipientsController from '@modules/recipients/infra/http/controllers/RecipientsController';

const recipientsController = new RecipientsController();

const recipientsRouter = Router();

recipientsRouter.use(ensureAuthenticated);

recipientsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      street: Joi.string().required(),
      number: Joi.number().required(),
      addinfos: Joi.string(),
      state: Joi.string().required(),
      city: Joi.string().required(),
      zipcode: Joi.string().required(),
    },
  }),
  recipientsController.create,
);

recipientsRouter.get('/', recipientsController.index);

recipientsRouter.delete('/:id', recipientsController.destroy);

recipientsRouter.put(
  '/:id',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string(),
      street: Joi.string(),
      number: Joi.number(),
      addinfos: Joi.string(),
      state: Joi.string(),
      city: Joi.string(),
      zipcode: Joi.string(),
    },
  }),
  recipientsController.update,
);

export default recipientsRouter;
