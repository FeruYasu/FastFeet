import { injectable, inject } from 'tsyringe';
import IRecipientsRepository from '../repositories/IRecipientsRepository';
import Recipient from '../infra/typeorm/entities/Recipient';

@injectable()
class FilterRecipientsByName {
  constructor(
    @inject('RecipientsRepository')
    private recipientsRepository: IRecipientsRepository,
  ) {}

  public async execute(name: string): Promise<Recipient[] | undefined> {
    const recipients = await this.recipientsRepository.filterByName(name);

    return recipients;
  }
}

export default FilterRecipientsByName;
