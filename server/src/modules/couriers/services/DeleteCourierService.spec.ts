import FakeCouriersRepository from '../repositories/fakes/FakeCouriersRepository';
import CreateCourierService from './CreateCourierService';
import DeleteCourierService from './DeleteCourierService';
import ListCouriersService from './ListCouriersService';

let fakeCouriersRepository: FakeCouriersRepository;
let createCourierService: CreateCourierService;
let deleteCourierService: DeleteCourierService;
let listCourierService: ListCouriersService;

describe('Delete Courier', () => {
  beforeEach(() => {
    fakeCouriersRepository = new FakeCouriersRepository();

    createCourierService = new CreateCourierService(fakeCouriersRepository);
    deleteCourierService = new DeleteCourierService(fakeCouriersRepository);
    listCourierService = new ListCouriersService(fakeCouriersRepository);
  });

  it('should be able to delete a courier', async () => {
    const courier = await createCourierService.execute({
      name: 'Entregador1',
      email: 'entregador1@email.com',
    });

    const courier2 = await createCourierService.execute({
      name: 'Entregador2',
      email: 'entregador2@email.com',
    });

    await deleteCourierService.execute(courier.id);

    const listOfCouriers = await listCourierService.execute();

    expect(listOfCouriers).toEqual([courier2]);
  });
});
