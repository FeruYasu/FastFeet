import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateRecipientService from '@modules/recipients/services/CreateRecipientService';
import ListRecipientsService from '@modules/recipients/services/ListRecipientsService';
import UpdateRecipientService from '@modules/recipients/services/UpdateRecipientService';

export default class RecipientsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listRecipients = container.resolve(ListRecipientsService);

    const recipients = await listRecipients.execute();

    return response.json(recipients);
  }

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

  public async update(request: Request, response: Response): Promise<Response> {
    const {
      name,
      street,
      number,
      addinfos,
      state,
      city,
      zipcode,
    } = request.body;

    const updateRecipient = container.resolve(UpdateRecipientService);

    const { id } = request.params;

    const recipient = await updateRecipient.execute(id, {
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
