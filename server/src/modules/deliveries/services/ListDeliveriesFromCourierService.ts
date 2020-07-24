import { injectable, inject } from 'tsyringe';
import IDeliveriesRepository from '../repositories/IDeliveriesRepository';
import Delivery from '../infra/typeorm/entities/Delivery';

@injectable()
class ListDeliveriesFromCourierService {
  constructor(
    @inject('DeliveriesRepository')
    private deliveriesRepository: IDeliveriesRepository,
  ) {}

  public async execute(courier_id: number): Promise<Delivery[] | undefined> {
    const deliveries = await this.deliveriesRepository.listDeliveryFromCourierID(
      courier_id,
    );

    return deliveries;
  }
}

export default ListDeliveriesFromCourierService;
