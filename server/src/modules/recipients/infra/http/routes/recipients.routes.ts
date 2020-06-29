import { Router } from 'express';

import RecipientsController from '@modules/recipients/infra/http/controllers/RecipientsController';

const recipientsController = new RecipientsController();

const recipientsRouter = Router();

recipientsRouter.post('/', recipientsController.create);

export default recipientsRouter;
