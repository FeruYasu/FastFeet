import { injectable, inject } from 'tsyringe';
import ICouriersRepository from '../repositories/ICouriersRepository';
import Delivery from '../infra/typeorm/entities/Courier';

@injectable()
class ListCouriersService {
  constructor(
    @inject('CouriersRepository')
    private couriersRepository: ICouriersRepository,
  ) {}

  public async execute(): Promise<Delivery[]> {
    const deliveries = await this.couriersRepository.listAll();

    return deliveries;
  }
}

export default ListCouriersService;
