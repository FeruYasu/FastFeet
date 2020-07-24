import { sign } from 'jsonwebtoken';
import authConfig from '@config/auth';
import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import ICouriersRepository from '../repositories/ICouriersRepository';

import Courier from '../infra/typeorm/entities/Courier';

interface IRequest {
  id: number;
}

interface IResponse {
  courier: Courier;
  token: string;
}

@injectable()
class AuthenticateCourierService {
  constructor(
    @inject('CouriersRepository')
    private courierRepository: ICouriersRepository,
  ) {}

  public async execute({ id }: IRequest): Promise<IResponse> {
    const courier = await this.courierRepository.findById(id);

    console.log(courier);

    if (!courier) {
      throw new AppError('Incorrect id.', 401);
    }

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: String(courier.id),
      expiresIn,
    });

    return {
      courier,
      token,
    };
  }
}

export default AuthenticateCourierService;
