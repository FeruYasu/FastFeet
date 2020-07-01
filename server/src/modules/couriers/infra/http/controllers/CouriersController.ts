import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateCourierService from '@modules/couriers/services/CreateCourierService';

export default class CouriersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email } = request.body;

    const createCourier = container.resolve(CreateCourierService);

    const courier = await createCourier.execute({
      email,
      name,
    });

    return response.json(courier);
  }
}
