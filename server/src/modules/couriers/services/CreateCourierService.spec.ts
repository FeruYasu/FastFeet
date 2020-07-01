import AppError from '@shared/errors/AppError';

import FakeCouriersRepository from '../repositories/fakes/FakeCouriersRepository';

import CreateCourierService from './CreateCourierService';

let fakeCourierRepository: FakeCouriersRepository;
let createCourier: CreateCourierService;

describe('CreateCourier', () => {
  beforeEach(() => {
    fakeCourierRepository = new FakeCouriersRepository();

    createCourier = new CreateCourierService(fakeCourierRepository);
  });

  it('should be able to create a Courier', async () => {
    const courier = await createCourier.execute({
      name: 'Entregador1',
      email: 'entregador1@email.com',
    });

    expect(courier).toHaveProperty('id');
  });

  it('should not be able to create a Courier with duplicate email', async () => {
    await createCourier.execute({
      name: 'Entregador1',
      email: 'entregador1@email.com',
    });

    await expect(
      createCourier.execute({
        name: 'Entregador2',
        email: 'entregador1@email.com',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
