import ICreateDeliveryDTO from '@modules/deliveries/dtos/ICreateDeliveryDTO';

import { Repository, getRepository, Like } from 'typeorm';
import IDeliveriesRepository from '@modules/deliveries/repositories/IDeliveriesRepository';
import Delivery from '../entities/Delivery';

class DeliveriesRepository implements IDeliveriesRepository {
  private ormRepository: Repository<Delivery>;

  constructor() {
    this.ormRepository = getRepository(Delivery);
  }

  public async create(data: ICreateDeliveryDTO): Promise<Delivery> {
    const delivery = this.ormRepository.create(data);

    await this.ormRepository.save(delivery);

    return delivery;
  }

  public async save(delivery: Delivery): Promise<Delivery> {
    return this.ormRepository.save(delivery);
  }

  public async listAll(): Promise<Delivery[]> {
    return this.ormRepository.find({ relations: ['courier', 'recipient'] });
  }

  public async listById(id: number): Promise<Delivery | undefined> {
    const delivery = await this.ormRepository.findOne({
      where: {
        id,
      },
      relations: ['courier', 'recipient'],
    });

    return delivery;
  }

  public async deleteById(id: number): Promise<void> {
    await this.ormRepository.delete(id);
  }

  public async updateById(
    id: number,
    data: ICreateDeliveryDTO,
  ): Promise<Delivery | undefined> {
    const delivery = await this.ormRepository.findOne({
      where: {
        id,
      },
    });

    if (delivery) {
      delivery.recipient_id = data.recipient_id;
      delivery.courier_id = data.courier_id;
      delivery.product = data.product;

      await this.ormRepository.save(delivery);
    }

    return delivery;
  }

  public async filterByProduct(
    product: string,
  ): Promise<Delivery[] | undefined> {
    const deliveries = await this.ormRepository.find({
      where: {
        product: Like(`%${product}%`),
      },
      relations: ['courier', 'recipient'],
    });

    return deliveries;
  }

  public async cancelById(id: number): Promise<Delivery | undefined> {
    const delivery = await this.ormRepository.findOne({
      where: {
        id,
      },
    });

    if (delivery) {
      delivery.canceled_at = new Date();

      await this.ormRepository.save(delivery);
    }

    return delivery;
  }
}

export default DeliveriesRepository;
