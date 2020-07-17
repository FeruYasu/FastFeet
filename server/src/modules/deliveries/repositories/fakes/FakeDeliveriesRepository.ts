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

  public async deleteById(id: string): Promise<void> {
    const newArray = this.deliveries.filter(
      findDelivery => findDelivery.id !== id,
    );

    this.deliveries = newArray;
  }

  public async listById(id: string): Promise<Delivery | undefined> {
    const findIndex = this.deliveries.findIndex(
      findDelivery => findDelivery.id === id,
    );

    return this.deliveries[findIndex];
  }

  public async updateById(
    id: string,
    data: ICreateDeliveryDTO,
  ): Promise<Delivery | undefined> {
    const findIndex = this.deliveries.findIndex(
      findDelivery => findDelivery.id === id,
    );

    this.deliveries[findIndex].recipient_id = data.recipient_id;
    this.deliveries[findIndex].courier_id = data.courier_id;
    this.deliveries[findIndex].product = data.product;

    return this.deliveries[findIndex];
  }

  public async filterByProduct(
    product: string,
  ): Promise<Delivery[] | undefined> {
    const filtered = this.deliveries.filter(findDelivery =>
      findDelivery.product.includes(product),
    );

    return filtered;
  }
}

export default FakeDeliveriesRepository;
