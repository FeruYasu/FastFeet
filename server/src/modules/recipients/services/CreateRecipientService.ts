import { injectable, inject } from 'tsyringe';
import IRecipientsRepository from '@modules/recipients/repositories/IRecipientsRepository';
import Recipient from '../infra/typeorm/entities/Recipient';

interface Request {
  name: string;
  street: string;
  number: number;
  addinfos?: string;
  state: string;
  city: string;
  zipcode: string;
}

@injectable()
class CreateRecipientService {
  constructor(
    @inject('RecipientsRepository')
    private recipientsRepository: IRecipientsRepository,
  ) {}

  public async execute(data: Request): Promise<Recipient> {
    const recipient = await this.recipientsRepository.create(data);

    return recipient;
  }
}

export default CreateRecipientService;
