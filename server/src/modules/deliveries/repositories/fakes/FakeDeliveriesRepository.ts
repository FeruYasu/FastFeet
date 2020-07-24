import Delivery from '@modules/deliveries/infra/typeorm/entities/Delivery';
import ICreateDeliveryDTO from '@modules/deliveries/dtos/ICreateDeliveryDTO';

import IDeliveriesRepository from '../IDeliveriesRepository';

class FakeDeliveriesRepository implements IDeliveriesRepository {
  private deliveries: Delivery[] = [];

  public async create(data: ICreateDeliveryDTO): Promise<Delivery> {
    const delivery = new Delivery();

    Object.assign(delivery, { id: this.deliveries.length + 1 }, data);

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

  public async deleteById(id: number): Promise<void> {
    const newArray = this.deliveries.filter(
      findDelivery => findDelivery.id !== id,
    );

    this.deliveries = newArray;
  }

  public async listById(id: number): Promise<Delivery | undefined> {
    const findIndex = this.deliveries.findIndex(
      findDelivery => findDelivery.id === id,
    );

    return this.deliveries[findIndex];
  }

  public async listDeliveryFromCourierID(
    courier_id: number,
  ): Promise<Delivery[] | undefined> {
    const deliveryList = this.deliveries.filter(
      findDelivery => findDelivery.courier_id === courier_id,
    );

    return deliveryList;
  }

  public async updateById(
    id: number,
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

  public async cancelById(id: number): Promise<Delivery | undefined> {
    const findIndex = this.deliveries.findIndex(
      findDelivery => findDelivery.id === id,
    );

    this.deliveries[findIndex].canceled_at = new Date();

    return this.deliveries[findIndex];
  }
}

export default FakeDeliveriesRepository;
