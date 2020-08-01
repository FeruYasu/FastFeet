import { sign } from 'jsonwebtoken';
import authConfig from '@config/auth';
import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import ICouriersRepository from '../repositories/ICouriersRepository';

import Courier from '../infra/typeorm/entities/Courier';

interface IRequest {
  email: string;
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

  public async execute({ email }: IRequest): Promise<IResponse> {
    const courier = await this.courierRepository.findByEmail(email);

    if (!courier) {
      throw new AppError('Incorrect email.', 401);
    }

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: String(courier.email),
      expiresIn,
    });

    return {
      courier,
      token,
    };
  }
}

export default AuthenticateCourierService;
