import FakeRecipientsRepository from '@modules/recipients/repositories/fakes/FakeRecipientRepository';
import CreateRecipientService from '@modules/recipients/services/CreateRecipientService';

import ListRecipientByIdService from './ListRecipientByIdService';

let createRecipient: CreateRecipientService;
let listRecipientByIdService: ListRecipientByIdService;

let fakeRecipientRepository: FakeRecipientsRepository;

describe('ListDeliveryById', () => {
  beforeEach(() => {
    fakeRecipientRepository = new FakeRecipientsRepository();

    createRecipient = new CreateRecipientService(fakeRecipientRepository);
    listRecipientByIdService = new ListRecipientByIdService(
      fakeRecipientRepository,
    );
  });

  it('should be able to list 1 recipient by ID', async () => {
    const recipient1 = await createRecipient.execute({
      name: 'Joao Paulo',
      street: 'Rua sete de setembro',
      number: 2354,
      state: 'PR',
      city: 'Curitiba',
      zipcode: '80401-432',
    });

    await createRecipient.execute({
      name: 'Joao Pedro',
      street: 'Rua sete de setembro',
      number: 2354,
      state: 'PR',
      city: 'Curitiba',
      zipcode: '80401-432',
    });

    const justOneRecipient = await listRecipientByIdService.execute(
      recipient1.id,
    );

    expect(justOneRecipient).toEqual(recipient1);
  });
});
