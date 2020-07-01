import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import CreateCourierDTO from '../dtos/ICreateCourierDTO';
import Courier from '../infra/typeorm/entities/Courier';

import ICourierRepository from '../repositories/ICouriersRepository';

@injectable()
class CreateCourierService {
  constructor(
    @inject('CouriersRepository')
    private courierRepository: ICourierRepository,
  ) {}

  public async execute({ email, name }: CreateCourierDTO): Promise<Courier> {
    const findCourier = await this.courierRepository.findByEmail(email);

    if (findCourier) {
      throw new AppError('Courier already exists');
    }

    const courier = await this.courierRepository.create({
      name,
      email,
    });

    return courier;
  }
}

export default CreateCourierService;
