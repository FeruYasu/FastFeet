import FakeRecipientsRepository from '@modules/recipients/repositories/fakes/FakeRecipientRepository';

import CreateRecipientService from '@modules/recipients/services/CreateRecipientService';
import FilterRecipientByNameService from './FilterRecipientByNameService';

let fakeRecipientsRepository: FakeRecipientsRepository;

let createRecipient: CreateRecipientService;
let filterRecipient: FilterRecipientByNameService;

describe('FilterRecipientByName', () => {
  beforeEach(() => {
    fakeRecipientsRepository = new FakeRecipientsRepository();

    createRecipient = new CreateRecipientService(fakeRecipientsRepository);
    filterRecipient = new FilterRecipientByNameService(
      fakeRecipientsRepository,
    );
  });

  it('should be able to list all recipients that matchs the query', async () => {
    const recipient1 = await createRecipient.execute({
      name: 'Joao Paulo',
      street: 'Rua sete de setembro',
      number: 2354,
      state: 'PR',
      city: 'Curitiba',
      zipcode: '80401-432',
    });

    const recipient2 = await createRecipient.execute({
      name: 'Pedro',
      street: 'Rua sete de setembro',
      number: 2354,
      state: 'PR',
      city: 'Curitiba',
      zipcode: '80401-432',
    });

    const filteredRecipient1 = await filterRecipient.execute('Paulo');
    const filteredRecipient2 = await filterRecipient.execute('Pedro');
    const filteredRecipient3 = await filterRecipient.execute('P');

    expect(filteredRecipient1).toEqual([recipient1]);
    expect(filteredRecipient2).toEqual([recipient2]);
    expect(filteredRecipient3).toEqual([recipient1, recipient2]);
  });
});
