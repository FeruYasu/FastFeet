import { container } from 'tsyringe';

import '@modules/users/providers';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

import IRecipientsRepository from '@modules/recipients/repositories/IRecipientsRepository';
import RecipientsRepository from '@modules/recipients/infra/typeorm/repositories/RecipientsRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IRecipientsRepository>(
  'RecipientsRepository',
  RecipientsRepository,
);
