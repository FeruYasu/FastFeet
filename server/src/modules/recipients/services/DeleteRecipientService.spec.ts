import FakeRecipientsRepository from '../repositories/fakes/FakeRecipientRepository';
import CreateRecipientService from './CreateRecipientService';
import DeleteRecipientService from './DeleteRecipientService';
import ListRecipientsService from './ListRecipientsService';

let fakeRecipientsRepository: FakeRecipientsRepository;
let createRecipientService: CreateRecipientService;
let deleteRecipientService: DeleteRecipientService;
let listRecipientService: ListRecipientsService;

describe('Delete Recipient', () => {
  beforeEach(() => {
    fakeRecipientsRepository = new FakeRecipientsRepository();

    createRecipientService = new CreateRecipientService(
      fakeRecipientsRepository,
    );
    deleteRecipientService = new DeleteRecipientService(
      fakeRecipientsRepository,
    );
    listRecipientService = new ListRecipientsService(fakeRecipientsRepository);
  });

  it('should be able to delete a recipient', async () => {
    const recipient1 = await createRecipientService.execute({
      name: 'Joao Paulo',
      street: 'Rua sete de setembro',
      number: 2354,
      state: 'PR',
      city: 'Curitiba',
      zipcode: '80401-432',
    });

    const recipient2 = await createRecipientService.execute({
      name: 'Pedro',
      street: 'Rua sete de setembro',
      number: 2354,
      state: 'PR',
      city: 'Curitiba',
      zipcode: '80401-432',
    });

    await deleteRecipientService.execute(recipient1.id);

    const listOfRecipients = await listRecipientService.execute();

    expect(listOfRecipients).toEqual([recipient2]);
  });
});
