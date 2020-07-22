import { injectable, inject } from 'tsyringe';
import IRecipientsRepository from '../repositories/IRecipientsRepository';
import Recipient from '../infra/typeorm/entities/Recipient';

@injectable()
class ListRecipientByIdService {
  constructor(
    @inject('RecipientsRepository')
    private recipientsRepository: IRecipientsRepository,
  ) {}

  public async execute(id: number): Promise<Recipient | undefined> {
    const recipient = await this.recipientsRepository.findById(id);

    return recipient;
  }
}

export default ListRecipientByIdService;
