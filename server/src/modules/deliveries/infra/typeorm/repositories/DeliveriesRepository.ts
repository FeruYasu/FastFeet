import ICreateDeliveryDTO from '@modules/deliveries/dtos/ICreateDeliveryDTO';

import { Repository, getRepository } from 'typeorm';
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
}

export default DeliveriesRepository;
