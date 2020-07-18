import { injectable, inject } from 'tsyringe';
import IDeliveriesRepository from '../repositories/IDeliveriesRepository';
import ICreateDeliveryDTO from '../dtos/ICreateDeliveryDTO';
import Delivery from '../infra/typeorm/entities/Delivery';

@injectable()
class UpdateDeliveryService {
  constructor(
    @inject('DeliveriesRepository')
    private deliveriesRepository: IDeliveriesRepository,
  ) {}

  public async execute(
    id: number,
    data: ICreateDeliveryDTO,
  ): Promise<Delivery | undefined> {
    const updateDelivery = await this.deliveriesRepository.updateById(id, data);

    return updateDelivery;
  }
}

export default UpdateDeliveryService;
