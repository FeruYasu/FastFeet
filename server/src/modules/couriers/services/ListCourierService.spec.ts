import FakeCouriersRepository from '@modules/couriers/repositories/fakes/FakeCouriersRepository';
import CreateCourierService from '@modules/couriers/services/CreateCourierService';

import ListCourierByIdService from './ListCourierByIdService';

let createCourier: CreateCourierService;
let listCourierByIdService: ListCourierByIdService;

let fakeCourierRepository: FakeCouriersRepository;

describe('ListDeliveryById', () => {
  beforeEach(() => {
    fakeCourierRepository = new FakeCouriersRepository();

    createCourier = new CreateCourierService(fakeCourierRepository);
    listCourierByIdService = new ListCourierByIdService(fakeCourierRepository);
  });

  it('should be able to list 1 courier by ID', async () => {
    const courier1 = await createCourier.execute({
      name: 'Entregador1',
      email: 'entregador1@email.com',
    });

    await createCourier.execute({
      name: 'Entregador2',
      email: 'entregador2@email.com',
    });

    const justOneCourier = await listCourierByIdService.execute(courier1.id);

    expect(justOneCourier).toEqual(courier1);
  });
});
