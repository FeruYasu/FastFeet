import { injectable, inject } from 'tsyringe';
import AppError from '@shared/errors/AppError';

import IRecipientsRepository from '../repositories/IRecipientsRepository';
import Recipient from '../infra/typeorm/entities/Recipient';

interface Request {
  name?: string;
  street?: string;
  number?: number;
  addinfos?: string;
  state?: string;
  city?: string;
  zipcode?: string;
}

@injectable()
class UpdateRecipientService {
  constructor(
    @inject('RecipientsRepository')
    private recipientsRepository: IRecipientsRepository,
  ) {}

  public async execute(
    id: number,
    { name, addinfos, city, zipcode, street, state, number }: Request,
  ): Promise<Recipient> {
    const recipient = await this.recipientsRepository.findById(id);

    if (!recipient) {
      throw new AppError('Recipient not found');
    }

    if (name) {
      recipient.name = name;
    }

    if (addinfos) {
      recipient.addinfos = addinfos;
    }

    if (city) {
      recipient.city = city;
    }

    if (zipcode) {
      recipient.zipcode = zipcode;
    }

    if (street) {
      recipient.street = street;
    }
    if (state) {
      recipient.state = state;
    }
    if (number) {
      recipient.number = number;
    }

    const updatedRecipient = await this.recipientsRepository.save(recipient);

    return updatedRecipient;
  }
}

export default UpdateRecipientService;
