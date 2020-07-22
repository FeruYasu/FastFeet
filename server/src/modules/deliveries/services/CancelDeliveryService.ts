import { injectable, inject } from 'tsyringe';
import IDeliveriesRepository from '../repositories/IDeliveriesRepository';

@injectable()
class UpdateDeliveryService {
  constructor(
    @inject('DeliveriesRepository')
    private deliveriesRepository: IDeliveriesRepository,
  ) {}

  public async execute(id: number): Promise<void> {
    await this.deliveriesRepository.cancelById(id);
  }
}

export default UpdateDeliveryService;
