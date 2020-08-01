import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import AuthenticateCourierService from '@modules/couriers/services/AuthenticateCourierService';

export default class SessionsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email } = request.body;

    const authenticateCourier = container.resolve(AuthenticateCourierService);

    const { courier, token } = await authenticateCourier.execute({
      email,
    });

    return response.json(classToClass({ courier, token }));
  }
}
