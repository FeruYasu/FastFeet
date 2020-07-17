import FakeRecipientsRepository from '@modules/recipients/repositories/fakes/FakeRecipientRepository';
import CreateRecipientService from '@modules/recipients/services/CreateRecipientService';

import FakeCouriersRepository from '@modules/couriers/repositories/fakes/FakeCouriersRepository';
import CreateCourierService from '@modules/couriers/services/CreateCourierService';

import FakeDeliveriesRepository from '../repositories/fakes/FakeDeliveriesRepository';
import CreateDeliveryService from './CreateDeliveryService';

import FilterDeliveriesService from './FilterDeliveriesService';

let createDelivery: CreateDeliveryService;
let createRecipient: CreateRecipientService;
let createCourier: CreateCourierService;
let filterDelivery: FilterDeliveriesService;

let fakeDeliveriesRepository: FakeDeliveriesRepository;
let fakeRecipientRepository: FakeRecipientsRepository;
let fakeCourierRepository: FakeCouriersRepository;

describe('FilterDelivery', () => {
  beforeEach(() => {
    fakeDeliveriesRepository = new FakeDeliveriesRepository();
    fakeRecipientRepository = new FakeRecipientsRepository();
    fakeCourierRepository = new FakeCouriersRepository();

    createDelivery = new CreateDeliveryService(fakeDeliveriesRepository);
    createRecipient = new CreateRecipientService(fakeRecipientRepository);
    createCourier = new CreateCourierService(fakeCourierRepository);
    filterDelivery = new FilterDeliveriesService(fakeDeliveriesRepository);
  });

  it('should be able to list all deliveries that matchs the query', async () => {
    const recipient = await createRecipient.execute({
      name: 'Joao Paulo',
      street: 'Rua sete de setembro',
      number: 2354,
      state: 'PR',
      city: 'Curitiba',
      zipcode: '80401-432',
    });

    const courier = await createCourier.execute({
      name: 'Entregador1',
      email: 'entregador1@email.com',
    });

    const delivery1 = await createDelivery.execute({
      product: 'Produto1',
      recipient_id: recipient.id,
      courier_id: courier.id,
    });

    const delivery2 = await createDelivery.execute({
      product: 'Produto2',
      recipient_id: recipient.id,
      courier_id: courier.id,
    });

    const filteredDelivery1 = await filterDelivery.execute('1');
    const filteredDelivery2 = await filterDelivery.execute('2');
    const filteredDelivery3 = await filterDelivery.execute('Pro');

    expect(filteredDelivery1).toEqual([delivery1]);
    expect(filteredDelivery2).toEqual([delivery2]);
    expect(filteredDelivery3).toEqual([delivery1, delivery2]);
  });
});
