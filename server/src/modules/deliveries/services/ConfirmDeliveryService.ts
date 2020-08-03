import { injectable, inject } from 'tsyringe';
import IStorageProvider from '@shared/container/providers/StorageProvider/models/IStorageProvider';
import AppError from '@shared/errors/AppError';
import IDeliveriesRepository from '../repositories/IDeliveriesRepository';
import Delivery from '../infra/typeorm/entities/Delivery';

interface IRequest {
  product_id: number;
  photoFilename: string;
}

@injectable()
class ConfirmDeliveryService {
  constructor(
    @inject('DeliveriesRepository')
    private deliveriesRepository: IDeliveriesRepository,

    @inject('StorageProvider')
    private storageProvider: IStorageProvider,
  ) {}

  public async execute({
    product_id,
    photoFilename,
  }: IRequest): Promise<Delivery> {
    const delivery = await this.deliveriesRepository.listById(product_id);

    if (!delivery) {
      throw new AppError('Only authenticated users can change avatar.', 401);
    }

    if (delivery.signature) {
      await this.storageProvider.deleteFile(delivery.signature);
    }

    const filename = await this.storageProvider.saveFile(photoFilename);

    delivery.signature = filename;
    if (delivery.signature) {
      delivery.end_date = new Date();
    }

    await this.deliveriesRepository.save(delivery);

    return delivery;
  }
}
export default ConfirmDeliveryService;
