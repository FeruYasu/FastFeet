import IRecipientsRepository from '@modules/recipients/repositories/IRecipientsRepository';
import { Repository, getRepository } from 'typeorm';
import ICreateRecipientDTO from '@modules/recipients/dtos/ICreateRecipientDTO';

import Recipient from '../entities/Recipient';

class RecipientsRepository implements IRecipientsRepository {
  private ormRepository: Repository<Recipient>;

  constructor() {
    this.ormRepository = getRepository(Recipient);
  }

  public async create(data: ICreateRecipientDTO): Promise<Recipient> {
    const recipient = this.ormRepository.create(data);

    await this.ormRepository.save(recipient);

    return recipient;
  }

  public async save(recipient: Recipient): Promise<Recipient> {
    return this.ormRepository.save(recipient);
  }

  public async findAll(): Promise<Recipient[]> {
    return this.ormRepository.find();
  }

  public async findById(id: string): Promise<Recipient | undefined> {
    const recipient = await this.ormRepository.findOne({
      where: { id },
    });

    return recipient;
  }
}

export default RecipientsRepository;
