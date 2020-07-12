import FakeCouriersRepository from '@modules/couriers/repositories/fakes/FakeCouriersRepository';
import CreateCourierService from '@modules/couriers/services/CreateCourierService';

import ListCouriersService from './ListCouriersService';

let createCourier: CreateCourierService;
let listCouriers: ListCouriersService;

let fakeCourierRepository: FakeCouriersRepository;

describe('ListCouriers', () => {
  beforeEach(() => {
    fakeCourierRepository = new FakeCouriersRepository();

    createCourier = new CreateCourierService(fakeCourierRepository);
    listCouriers = new ListCouriersService(fakeCourierRepository);
  });

  it('should be able to list all deliveries', async () => {
    const courier1 = await createCourier.execute({
      name: 'Entregador 1',
      email: 'entregador1@fastfeet.com',
    });

    const courier2 = await createCourier.execute({
      name: 'Entregador2',
      email: 'entregador2@email.com',
    });

    const allCouriers = await listCouriers.execute();

    expect(allCouriers).toEqual([courier1, courier2]);
  });
});
