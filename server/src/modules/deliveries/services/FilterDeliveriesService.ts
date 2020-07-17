import { injectable, inject } from 'tsyringe';
import IDeliveriesRepository from '../repositories/IDeliveriesRepository';
import Delivery from '../infra/typeorm/entities/Delivery';

@injectable()
class FilterDeliveriesService {
  constructor(
    @inject('DeliveriesRepository')
    private deliveriesRepository: IDeliveriesRepository,
  ) {}

  public async execute(product: string): Promise<Delivery[] | undefined> {
    const deliveries = await this.deliveriesRepository.filterByProduct(product);

    return deliveries;
  }
}

export default FilterDeliveriesService;
