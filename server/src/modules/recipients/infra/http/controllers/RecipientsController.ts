import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateRecipientService from '@modules/recipients/services/CreateRecipientService';

export default class RecipientsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      name,
      street,
      number,
      addinfos,
      state,
      city,
      zipcode,
    } = request.body;

    const createRecipient = container.resolve(CreateRecipientService);

    const recipient = await createRecipient.execute({
      name,
      street,
      number,
      addinfos,
      state,
      city,
      zipcode,
    });

    return response.json(recipient);
  }
}
