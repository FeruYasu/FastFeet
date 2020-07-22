import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateRecipientService from '@modules/recipients/services/CreateRecipientService';
import ListRecipientsService from '@modules/recipients/services/ListRecipientsService';
import UpdateRecipientService from '@modules/recipients/services/UpdateRecipientService';
import FilterRecipientsByName from '@modules/recipients/services/FilterRecipientByNameService';
import DeleteRecipientService from '@modules/recipients/services/DeleteRecipientService';
import ListRecipientByIdService from '@modules/recipients/services/ListRecipientByIdService';

import { classToClass } from 'class-transformer';

export default class RecipientsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { name } = request.query;

    let recipients;

    if (!name) {
      const listRecipientsService = container.resolve(ListRecipientsService);

      recipients = await listRecipientsService.execute();
    } else {
      const filterRecipientsByName = container.resolve(FilterRecipientsByName);

      recipients = await filterRecipientsByName.execute(name.toString());
    }

    return response.json(classToClass(recipients));
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

    const recipient = await updateRecipient.execute(Number(id), {
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

  public async destroy(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { id } = request.params;

    const deleteRecipient = container.resolve(DeleteRecipientService);

    await deleteRecipient.execute(Number(id));

    return response.status(204).json({ message: 'deleted' });
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const listRecipient = container.resolve(ListRecipientByIdService);

    const recipient = await listRecipient.execute(Number(id));

    return response.json(classToClass(recipient));
  }
}
