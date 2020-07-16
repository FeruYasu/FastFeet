import { injectable, inject } from 'tsyringe';
import IDeliveriesRepository from '../repositories/IDeliveriesRepository';
import Delivery from '../infra/typeorm/entities/Delivery';

@injectable()
class ListDeliveriesService {
  constructor(
    @inject('DeliveriesRepository')
    private deliveriesRepository: IDeliveriesRepository,
  ) {}

  public async execute(id: string): Promise<Delivery | undefined> {
    const delivery = await this.deliveriesRepository.listById(id);

    return delivery;
  }
}

export default ListDeliveriesService;
