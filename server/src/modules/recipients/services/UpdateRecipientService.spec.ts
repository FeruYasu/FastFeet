import FakeRecipientRepository from '../repositories/fakes/FakeRecipientRepository';

import CreateRecipientService from './CreateRecipientService';
import UpdateRecipientService from './UpdateRecipientService';

let fakeRecipientRepository: FakeRecipientRepository;

let createRecipient: CreateRecipientService;
let updateRecipient: UpdateRecipientService;

describe('UpdateRecipient', () => {
  beforeEach(() => {
    fakeRecipientRepository = new FakeRecipientRepository();

    createRecipient = new CreateRecipientService(fakeRecipientRepository);

    updateRecipient = new UpdateRecipientService(fakeRecipientRepository);
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

    const recipientsList = await updateRecipient.execute(recipient1.id, {
      number: 1111,
      state: 'PR',
      city: 'Curitiba',
      zipcode: '80401-432',
    });

    expect(recipientsList).toEqual(recipient1);
  });
});
