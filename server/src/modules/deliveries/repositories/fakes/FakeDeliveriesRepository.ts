import Delivery from '@modules/deliveries/infra/typeorm/entities/Delivery';
import ICreateDeliveryDTO from '@modules/deliveries/dtos/ICreateDeliveryDTO';
import { uuid } from 'uuidv4';

import IDeliveriesRepository from '../IDeliveriesRepository';

class FakeDeliveriesRepository implements IDeliveriesRepository {
  private deliveries: Delivery[] = [];

  public async create(data: ICreateDeliveryDTO): Promise<Delivery> {
    const delivery = new Delivery();

    Object.assign(delivery, { id: uuid() }, data);

    this.deliveries.push(delivery);

    return delivery;
  }

  public async save(delivery: Delivery): Promise<Delivery> {
    const findIndex = this.deliveries.findIndex(
      findDelivery => findDelivery.id === delivery.id,
    );

    this.deliveries[findIndex] = delivery;
    return delivery;
  }

  public async listAll(): Promise<Delivery[]> {
    return this.deliveries;
  }
}

export default FakeDeliveriesRepository;
