import FakeDeliveriesRepository from '@modules/deliveries/repositories/fakes/FakeDeliveriesRepository';
import CreateDeliveryService from '@modules/deliveries/services/CreateDeliveryService';

import FakeRecipientsRepository from '@modules/recipients/repositories/fakes/FakeRecipientRepository';
import CreateRecipientService from '@modules/recipients/services/CreateRecipientService';

import FakeCouriersRepository from '@modules/couriers/repositories/fakes/FakeCouriersRepository';
import CreateCourierService from '@modules/couriers/services/CreateCourierService';

import FakeDeliveryProblemsRepository from '../repositories/fakes/FakeDeliveryProblemsRepository';
import CreateDeliveryProblemsService from './CreateDeliveryProblemService';
import ListDeliveryProblemsService from './ListDeliveryProblemsService';

let createRecipientService: CreateRecipientService;
let createCourierService: CreateCourierService;
let createDeliveryService: CreateDeliveryService;
let createDeliveryProblemService: CreateDeliveryProblemsService;
let listDeliveryProblemsService: ListDeliveryProblemsService;

let fakeDeliveriesRepository: FakeDeliveriesRepository;
let fakeRecipientRepository: FakeRecipientsRepository;
let fakeCourierRepository: FakeCouriersRepository;
let fakeDeliveryProblemsRepository: FakeDeliveryProblemsRepository;

describe('List Delivery Problems', () => {
  beforeEach(() => {
    fakeDeliveriesRepository = new FakeDeliveriesRepository();
    fakeRecipientRepository = new FakeRecipientsRepository();
    fakeCourierRepository = new FakeCouriersRepository();
    fakeDeliveryProblemsRepository = new FakeDeliveryProblemsRepository();

    createRecipientService = new CreateRecipientService(
      fakeRecipientRepository,
    );
    createCourierService = new CreateCourierService(fakeCourierRepository);

    createDeliveryService = new CreateDeliveryService(fakeDeliveriesRepository);
    createDeliveryProblemService = new CreateDeliveryProblemsService(
      fakeDeliveryProblemsRepository,
    );

    listDeliveryProblemsService = new ListDeliveryProblemsService(
      fakeDeliveryProblemsRepository,
    );
  });

  it('should be able to List all delivery problem', async () => {
    const recipient = await createRecipientService.execute({
      name: 'Joao Paulo',
      street: 'Rua sete de setembro',
      number: 2354,
      state: 'PR',
      city: 'Curitiba',
      zipcode: '80401-432',
    });

    const courier = await createCourierService.execute({
      name: 'Entregador1',
      email: 'entregador1@email.com',
    });

    const delivery = await createDeliveryService.execute({
      product: 'Produto1',
      recipient_id: recipient.id,
      courier_id: courier.id,
    });

    const deliveryProblem1 = await createDeliveryProblemService.execute({
      delivery_id: delivery.id,
      description: 'Problema na entrega',
    });

    const deliveryProblem2 = await createDeliveryProblemService.execute({
      delivery_id: delivery.id,
      description: 'Problema na entrega 2',
    });

    const allProblems = await listDeliveryProblemsService.execute();

    expect(allProblems).toEqual([deliveryProblem1, deliveryProblem2]);
  });
});
