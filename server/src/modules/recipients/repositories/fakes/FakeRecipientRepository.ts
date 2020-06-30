import { uuid } from 'uuidv4';

import ICreateRecipientDTO from '@modules/recipients/dtos/ICreateRecipientDTO';
import Recipient from '@modules/recipients/infra/typeorm/entities/Recipient';
import IRecipientsRepository from '../IRecipientsRepository';

class FakeRecipientRepository implements IRecipientsRepository {
  private recipients: Recipient[] = [];

  public async create(data: ICreateRecipientDTO): Promise<Recipient> {
    const recipient = new Recipient();

    Object.assign(recipient, { id: uuid() }, data);

    this.recipients.push(recipient);

    return recipient;
  }

  public async save(recipient: Recipient): Promise<Recipient> {
    const findIndex = this.recipients.findIndex(
      findRecipient => findRecipient.id === recipient.id,
    );

    this.recipients[findIndex] = recipient;
    return recipient;
  }
}

export default FakeRecipientRepository;
