import AppError from '@shared/errors/AppError';

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

  it('should update recipient', async () => {
    const recipient1 = await createRecipient.execute({
      name: 'Joao Paulo',
      street: 'Rua sete de setembro',
      number: 2354,
      state: 'PR',
      city: 'Curitiba',
      zipcode: '80401-432',
    });

    const recipientsList = await updateRecipient.execute(recipient1.id, {
      name: 'Paulo',
      number: 1111,
      state: 'PR',
      city: 'Curitiba',
      addinfos: 'Perto do shopping',
      zipcode: '80401-432',
      street: 'Rua 7 de setembro',
    });

    expect(recipientsList).toEqual(recipient1);
  });

  it('should not be able to update nonexistent recipient', async () => {
    await expect(
      updateRecipient.execute('nonexisntedId', {
        number: 1111,
        state: 'PR',
        city: 'Curitiba',
        zipcode: '80401-432',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
