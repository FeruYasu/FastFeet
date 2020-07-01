import Recipient from '@modules/recipients/infra/typeorm/entities/Recipient';

import ICreateRecipientDTO from '../dtos/ICreateRecipientDTO';

export default interface IRecipientsRepository {
  findById(id: string): Promise<Recipient | undefined>;
  findAll(): Promise<Recipient[]>;
  create(data: ICreateRecipientDTO): Promise<Recipient>;
  save(recipient: Recipient): Promise<Recipient>;
}
