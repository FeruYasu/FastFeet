import Recipient from '@modules/recipients/infra/typeorm/entities/Recipient';

import ICreateRecipientDTO from '../dtos/ICreateRecipientDTO';

export default interface IRecipientsRepository {
  create(data: ICreateRecipientDTO): Promise<Recipient>;
  save(recipient: Recipient): Promise<Recipient>;
}
