import { injectable, inject } from 'tsyringe';
import IRecipientsRepository from '../repositories/IRecipientsRepository';

@injectable()
class DeleteCourierService {
  constructor(
    @inject('RecipientsRepository')
    private recipientsRepository: IRecipientsRepository,
  ) {}

  public async execute(id: number): Promise<void> {
    await this.recipientsRepository.deleteById(id);
  }
}

export default DeleteCourierService;
