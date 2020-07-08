import { injectable, inject } from 'tsyringe';
import IDeliveriesRepository from '../repositories/IDeliveriesRepository';

@injectable()
class DeleteDeliveryService {
  constructor(
    @inject('DeliveriesRepository')
    private deliveriesRepository: IDeliveriesRepository,
  ) {}

  public async execute(id: string): Promise<void> {
    await this.deliveriesRepository.deleteById(id);
  }
}

export default DeleteDeliveryService;
