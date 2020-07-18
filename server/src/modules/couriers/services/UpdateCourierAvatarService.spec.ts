import AppError from '@shared/errors/AppError';

import FakeStorageProvider from '@shared/container/providers/StorageProvider/fakes/FakeStorageProvider';
import FakeCourierRepository from '../repositories/fakes/FakeCouriersRepository';
import UpdateUserAvatarService from './UpdateCourierAvatarService';

let fakeCourierRepository: FakeCourierRepository;
let fakeStorageProvider: FakeStorageProvider;
let updateUserAvatar: UpdateUserAvatarService;

describe('UpdateCourierAvatar', () => {
  beforeEach(() => {
    fakeCourierRepository = new FakeCourierRepository();
    fakeStorageProvider = new FakeStorageProvider();

    updateUserAvatar = new UpdateUserAvatarService(
      fakeCourierRepository,
      fakeStorageProvider,
    );
  });
  it('should be able to update courier avatar', async () => {
    const courier = await fakeCourierRepository.create({
      name: 'John Doe',
      email: 'oi@oi.com.br',
    });

    await updateUserAvatar.execute({
      courier_id: courier.id,
      avatarFilename: 'avatar.jpg',
    });

    expect(courier.avatar).toBe('avatar.jpg');
  });

  it('should not be able to update avatar from nonexistent courier', async () => {
    await expect(
      updateUserAvatar.execute({
        courier_id: 45252,
        avatarFilename: 'avatar.jpg',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should delete old avatar when update', async () => {
    const deleteFile = jest.spyOn(fakeStorageProvider, 'deleteFile');

    const courier = await fakeCourierRepository.create({
      name: 'John Doe',
      email: 'oi@oi.com.br',
    });

    await updateUserAvatar.execute({
      courier_id: courier.id,
      avatarFilename: 'avatar.jpg',
    });

    await updateUserAvatar.execute({
      courier_id: courier.id,
      avatarFilename: 'avatar2.jpg',
    });

    expect(deleteFile).toHaveBeenCalledWith('avatar.jpg');

    expect(courier.avatar).toBe('avatar2.jpg');
  });
});
