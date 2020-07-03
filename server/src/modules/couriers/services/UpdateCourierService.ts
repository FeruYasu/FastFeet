import AppError from '@shared/errors/AppError';

import { injectable, inject } from 'tsyringe';
import ICouriersRepository from '../repositories/ICouriersRepository';
import Courier from '../infra/typeorm/entities/Courier';

interface UpdateCourierDTO {
  id: string;
  name: string;
  email: string;
}

@injectable()
class UpdateCourierService {
  constructor(
    @inject('CouriersRepository')
    private couriersRepository: ICouriersRepository,
  ) {}

  public async execute({
    id,
    name,
    email,
  }: UpdateCourierDTO): Promise<Courier> {
    const findCourier = await this.couriersRepository.findById(id);

    if (!findCourier) {
      throw new AppError('Courier not found');
    }

    if (name) {
      findCourier.name = name;
    }

    if (email) {
      findCourier.email = email;
    }

    this.couriersRepository.save(findCourier);

    return findCourier;
  }
}

export default UpdateCourierService;
