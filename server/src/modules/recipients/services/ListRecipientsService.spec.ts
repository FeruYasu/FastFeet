import FakeRecipientRepository from '../repositories/fakes/FakeRecipientRepository';

import ListRecipientsService from './ListRecipientsService';
import CreateRecipientService from './CreateRecipientService';

let fakeRecipientRepository: FakeRecipientRepository;

let createRecipient: CreateRecipientService;
let listRecipients: ListRecipientsService;

describe('ListRecipients', () => {
  beforeEach(() => {
    fakeRecipientRepository = new FakeRecipientRepository();

    createRecipient = new CreateRecipientService(fakeRecipientRepository);

    listRecipients = new ListRecipientsService(fakeRecipientRepository);
  });

  it('should list all recipients', async () => {
    const recipient1 = await createRecipient.execute({
      name: 'Joao Paulo',
      street: 'Rua sete de setembro',
      number: 2354,
      state: 'PR',
      city: 'Curitiba',
      zipcode: '80401-432',
    });

    const recipient2 = await createRecipient.execute({
      name: 'Paulo',
      street: 'Rua sete de setembro',
      number: 1111,
      state: 'PR',
      city: 'Curitiba',
      zipcode: '80401-432',
    });

    const recipientsList = await listRecipients.execute();

    expect(recipientsList).toEqual([recipient1, recipient2]);
  });
});
