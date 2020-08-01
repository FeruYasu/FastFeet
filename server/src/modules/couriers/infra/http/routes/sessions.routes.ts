import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import SessionsController from '../controllers/SessionsController';

const courierSessionsRouter = Router();
const sessionsController = new SessionsController();

courierSessionsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().required(),
    },
  }),
  sessionsController.create,
);

export default courierSessionsRouter;
