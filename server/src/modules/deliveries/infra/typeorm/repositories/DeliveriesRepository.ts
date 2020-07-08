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

  public async listAll(): Promise<Delivery[]> {
    return this.ormRepository.find({ relations: ['courier', 'recipient'] });
  }

  public async deleteById(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }
}

export default DeliveriesRepository;
