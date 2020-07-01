import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '@config/upload';

import CouriersController from '@modules/couriers/infra/http/controllers/CouriersController';
import ensureAuthentication from '@modules/users/infra/http/middlewares/ensureAuthentication';
import CouriersAvatarController from '@modules/couriers/infra/http/controllers/CouriersAvatarController';

const couriersRouter = Router();
const couriersController = new CouriersController();
const couriersAvatarController = new CouriersAvatarController();

const upload = multer(uploadConfig.multer);

couriersRouter.post('/', couriersController.create);

couriersRouter.patch(
  '/avatar/:id',
  ensureAuthentication,
  upload.single('avatar'),
  couriersAvatarController.update,
);

export default couriersRouter;
