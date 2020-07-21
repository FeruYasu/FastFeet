import { container } from 'tsyringe';

import '@modules/users/providers';
import './providers';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

import IRecipientsRepository from '@modules/recipients/repositories/IRecipientsRepository';
import RecipientsRepository from '@modules/recipients/infra/typeorm/repositories/RecipientsRepository';

import ICouriersRepository from '@modules/couriers/repositories/ICouriersRepository';
import CouriersRepository from '@modules/couriers/infra/typeorm/repositories/CouriersRepository';

import IDeliveriesRepository from '@modules/deliveries/repositories/IDeliveriesRepository';
import DeliveriesRepository from '@modules/deliveries/infra/typeorm/repositories/DeliveriesRepository';

import IDeliveryProblemsRepository from '@modules/delivery_problems/repositories/IDeliveryProblemsRepository';
import DeliveryProblemsRepository from '@modules/delivery_problems/infra/typeorm/repositories/DeliveryProblemsRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IRecipientsRepository>(
  'RecipientsRepository',
  RecipientsRepository,
);

container.registerSingleton<ICouriersRepository>(
  'CouriersRepository',
  CouriersRepository,
);

container.registerSingleton<IDeliveriesRepository>(
  'DeliveriesRepository',
  DeliveriesRepository,
);

container.registerSingleton<IDeliveryProblemsRepository>(
  'DeliveryProblemsRepository',
  DeliveryProblemsRepository,
);
