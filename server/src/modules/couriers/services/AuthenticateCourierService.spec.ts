import AppError from '@shared/errors/AppError';

import FakeCouriersRepository from '../repositories/fakes/FakeCouriersRepository';
import AuthenticateCourierService from './AuthenticateCourierService';
import CreateCourierService from './CreateCourierService';

let fakeCouriersRepository: FakeCouriersRepository;
let createCourier: CreateCourierService;
let authenticateCourier: AuthenticateCourierService;

describe('Authenticate Courier Session', () => {
  beforeEach(() => {
    fakeCouriersRepository = new FakeCouriersRepository();

    createCourier = new CreateCourierService(fakeCouriersRepository);

    authenticateCourier = new AuthenticateCourierService(
      fakeCouriersRepository,
    );
  });

  it('should be able to authenticate', async () => {
    const courier = await createCourier.execute({
      name: 'Entregador1',
      email: 'entregador1@email.com',
    });

    const response = await authenticateCourier.execute({
      email: courier.email,
    });

    expect(response).toHaveProperty('token');
    expect(response.courier).toEqual(courier);
  });

  it('should not be able to authenticate with nonexistent user', async () => {
    await expect(
      authenticateCourier.execute({
        email: 'nonexistent@user.com.br',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
