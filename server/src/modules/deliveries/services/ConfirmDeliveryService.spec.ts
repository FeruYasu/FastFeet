import AppError from '@shared/errors/AppError';

import FakeRecipientsRepository from '@modules/recipients/repositories/fakes/FakeRecipientRepository';
import FakeCouriersRepository from '@modules/couriers/repositories/fakes/FakeCouriersRepository';
import FakeStorageProvider from '@shared/container/providers/StorageProvider/fakes/FakeStorageProvider';
import FakeDeliveriesRepository from '../repositories/fakes/FakeDeliveriesRepository';
import ConfirmDeliveryService from './ConfirmDeliveryService';

let fakeStorageProvider: FakeStorageProvider;
let fakeDeliveriesRepository: FakeDeliveriesRepository;
let fakeRecipientRepository: FakeRecipientsRepository;
let fakeCourierRepository: FakeCouriersRepository;

let confirmDelivery: ConfirmDeliveryService;

describe('UpdateDeliveryAvatar', () => {
  beforeEach(() => {
    fakeDeliveriesRepository = new FakeDeliveriesRepository();
    fakeRecipientRepository = new FakeRecipientsRepository();
    fakeCourierRepository = new FakeCouriersRepository();
    fakeDeliveriesRepository = new FakeDeliveriesRepository();
    fakeStorageProvider = new FakeStorageProvider();

    confirmDelivery = new ConfirmDeliveryService(
      fakeDeliveriesRepository,
      fakeStorageProvider,
    );
  });
  it('should be able to update delivery signature', async () => {
    const recipient = await fakeRecipientRepository.create({
      name: 'Joao Paulo',
      street: 'Rua sete de setembro',
      number: 2354,
      state: 'PR',
      city: 'Curitiba',
      zipcode: '80401-432',
    });

    const courier = await fakeCourierRepository.create({
      name: 'Entregador1',
      email: 'entregador1@email.com',
    });

    const delivery = await fakeDeliveriesRepository.create({
      product: 'Produto1',
      recipient_id: recipient.id,
      courier_id: courier.id,
    });

    await confirmDelivery.execute({
      product_id: delivery.id,
      photoFilename: 'avatar.jpg',
    });

    expect(delivery.signature).toBe('avatar.jpg');
  });

  it('should not be able to update avatar from nonexistent delivery', async () => {
    await expect(
      confirmDelivery.execute({
        product_id: 45252,
        photoFilename: 'avatar.jpg',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should delete old avatar when update', async () => {
    const deleteFile = jest.spyOn(fakeStorageProvider, 'deleteFile');

    const recipient = await fakeRecipientRepository.create({
      name: 'Joao Paulo',
      street: 'Rua sete de setembro',
      number: 2354,
      state: 'PR',
      city: 'Curitiba',
      zipcode: '80401-432',
    });

    const courier = await fakeCourierRepository.create({
      name: 'Entregador1',
      email: 'entregador1@email.com',
    });

    const delivery = await fakeDeliveriesRepository.create({
      product: 'Produto1',
      recipient_id: recipient.id,
      courier_id: courier.id,
    });

    await confirmDelivery.execute({
      product_id: delivery.id,
      photoFilename: 'avatar.jpg',
    });

    await confirmDelivery.execute({
      product_id: delivery.id,
      photoFilename: 'avatar2.jpg',
    });

    expect(deleteFile).toHaveBeenCalledWith('avatar.jpg');

    expect(delivery.signature).toBe('avatar2.jpg');
  });
});
