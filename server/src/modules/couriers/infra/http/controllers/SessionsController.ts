import { Request, Response } from 'express';
import { container } from 'tsyringe';

import AuthenticateCourierService from '@modules/couriers/services/AuthenticateCourierService';

export default class SessionsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { id } = request.body;

    const authenticateCourier = container.resolve(AuthenticateCourierService);

    const { courier, token } = await authenticateCourier.execute({
      id,
    });

    return response.json({ courier, token });
  }
}
