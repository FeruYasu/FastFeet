import { injectable, inject } from 'tsyringe';
import ICouriersRepository from '../repositories/ICouriersRepository';
import Courier from '../infra/typeorm/entities/Courier';

@injectable()
class ListCourierByIdService {
  constructor(
    @inject('CouriersRepository')
    private couriersRepository: ICouriersRepository,
  ) {}

  public async execute(id: number): Promise<Courier | undefined> {
    const courier = await this.couriersRepository.findById(id);

    return courier;
  }
}

export default ListCourierByIdService;
