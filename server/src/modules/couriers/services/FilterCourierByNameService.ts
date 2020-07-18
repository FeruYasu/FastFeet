import { injectable, inject } from 'tsyringe';
import ICouriersRepository from '../repositories/ICouriersRepository';
import Courier from '../infra/typeorm/entities/Courier';

@injectable()
class FilterDeliveriesService {
  constructor(
    @inject('CouriersRepository')
    private deliveriesRepository: ICouriersRepository,
  ) {}

  public async execute(name: string): Promise<Courier[] | undefined> {
    const couriers = await this.deliveriesRepository.filterByName(name);

    return couriers;
  }
}

export default FilterDeliveriesService;
