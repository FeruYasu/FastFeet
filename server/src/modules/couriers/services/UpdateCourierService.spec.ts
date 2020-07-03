import AppError from '@shared/errors/AppError';

import FakeCouriersRepository from '../repositories/fakes/FakeCouriersRepository';

import CreateCourierService from './CreateCourierService';
import UpdateCourierService from './UpdateCourierService';

let fakeCourierRepository: FakeCouriersRepository;
let createCourier: CreateCourierService;
let updateCourier: UpdateCourierService;

describe('UpdateCourier', () => {
  beforeEach(() => {
    fakeCourierRepository = new FakeCouriersRepository();

    createCourier = new CreateCourierService(fakeCourierRepository);
    updateCourier = new UpdateCourierService(fakeCourierRepository);
  });

  it('should be able to create a Courier', async () => {
    const courier = await createCourier.execute({
      name: 'Entregador1',
      email: 'entregador1@email.com',
    });

    const updatedcourier = await updateCourier.execute({
      id: courier.id,
      name: 'Entregar updated',
      email: 'newemail@email.com',
    });

    expect(updatedcourier.email).toBe('newemail@email.com');
    expect(updatedcourier.name).toBe('Entregar updated');
  });

  it('should not be able to create a Courier with nonexistent id', async () => {
    await expect(
      updateCourier.execute({
        id: 'wrongid',
        name: 'Entregador2',
        email: 'entregador1@email.com',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
