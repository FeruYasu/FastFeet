import FakeRecipientRepository from '../repositories/fakes/FakeRecipientRepository';

import CreateRecipientService from './CreateRecipientService';

let fakeRecipientRepository: FakeRecipientRepository;

let createRecipientService: CreateRecipientService;

describe('CreateUser', () => {
  beforeEach(() => {
    fakeRecipientRepository = new FakeRecipientRepository();

    createRecipientService = new CreateRecipientService(
      fakeRecipientRepository,
    );
  });
  it('should be able to create a new user', async () => {
    const recipient = await createRecipientService.execute({
      name: 'Joao Paulo',
      street: 'Rua sete de setembro',
      number: 2354,
      state: 'PR',
      city: 'Curitiba',
      zipcode: '80401-432',
    });

    expect(recipient).toHaveProperty('id');
  });
});
