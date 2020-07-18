import { injectable, inject } from 'tsyringe';
import ICouriersRepository from '../repositories/ICouriersRepository';

@injectable()
class DeleteCourierService {
  constructor(
    @inject('CouriersRepository')
    private couriersRepository: ICouriersRepository,
  ) {}

  public async execute(id: number): Promise<void> {
    await this.couriersRepository.deleteById(id);
  }
}

export default DeleteCourierService;
