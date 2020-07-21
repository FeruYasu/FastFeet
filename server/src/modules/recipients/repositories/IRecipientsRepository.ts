import Recipient from '@modules/recipients/infra/typeorm/entities/Recipient';

import ICreateRecipientDTO from '../dtos/ICreateRecipientDTO';

export default interface IRecipientsRepository {
  findById(id: number): Promise<Recipient | undefined>;
  findAll(): Promise<Recipient[]>;
  create(data: ICreateRecipientDTO): Promise<Recipient>;
  save(recipient: Recipient): Promise<Recipient>;
  filterByName(name: string): Promise<Recipient[] | undefined>;
}
