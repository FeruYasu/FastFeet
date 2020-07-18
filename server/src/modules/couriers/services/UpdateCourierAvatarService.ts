import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import IStorageProvider from '@shared/container/providers/StorageProvider/models/IStorageProvider';
import ICouriersRepository from '../repositories/ICouriersRepository';

import Courier from '../infra/typeorm/entities/Courier';

interface IRequest {
  courier_id: number;
  avatarFilename: string;
}

@injectable()
class UpdateCourierAvatarService {
  constructor(
    @inject('CouriersRepository')
    private couriersRepository: ICouriersRepository,

    @inject('StorageProvider')
    private storageProvider: IStorageProvider,
  ) {}

  public async execute({
    courier_id,
    avatarFilename,
  }: IRequest): Promise<Courier> {
    const courier = await this.couriersRepository.findById(courier_id);

    if (!courier) {
      throw new AppError('Only authenticated users can change avatar.', 401);
    }

    if (courier.avatar) {
      await this.storageProvider.deleteFile(courier.avatar);
    }

    const filename = await this.storageProvider.saveFile(avatarFilename);

    courier.avatar = filename;

    await this.couriersRepository.save(courier);

    return courier;
  }
}

export default UpdateCourierAvatarService;
