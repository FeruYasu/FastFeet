import FakeCouriersRepository from '@modules/couriers/repositories/fakes/FakeCouriersRepository';

import CreateCourierService from '@modules/couriers/services/CreateCourierService';
import FilterCourierByNameService from './FilterCourierByNameService';

let fakeCouriersRepository: FakeCouriersRepository;

let createCourier: CreateCourierService;
let filterCourier: FilterCourierByNameService;

describe('FilterCourierByName', () => {
  beforeEach(() => {
    fakeCouriersRepository = new FakeCouriersRepository();

    createCourier = new CreateCourierService(fakeCouriersRepository);
    filterCourier = new FilterCourierByNameService(fakeCouriersRepository);
  });

  it('should be able to list all couriers that matchs the query', async () => {
    const courier1 = await createCourier.execute({
      name: 'Entregador1',
      email: 'entregador1@email.com',
    });

    const courier2 = await createCourier.execute({
      name: 'Entregador2',
      email: 'entregador2@email.com',
    });

    const filteredCourier1 = await filterCourier.execute('1');
    const filteredCourier2 = await filterCourier.execute('2');
    const filteredCourier3 = await filterCourier.execute('Entre');

    expect(filteredCourier1).toEqual([courier1]);
    expect(filteredCourier2).toEqual([courier2]);
    expect(filteredCourier3).toEqual([courier1, courier2]);
  });
});
