import { injectable, inject } from 'tsyringe';

import IRecipientsRepository from '../repositories/IRecipientsRepository';
import Recipient from '../infra/typeorm/entities/Recipient';

@injectable()
class ListRecipientsService {
  constructor(
    @inject('RecipientsRepository')
    private recipientsRepository: IRecipientsRepository,
  ) {}

  public async execute(): Promise<Recipient[]> {
    const recipientsList = this.recipientsRepository.findAll();

    return recipientsList;
  }
}

export default ListRecipientsService;
