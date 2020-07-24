import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListDeliveriesFromCourierService from '@modules/deliveries/services/ListDeliveriesFromCourierService';

import { classToClass } from 'class-transformer';

export default class CouriersDeliveryController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const listDeliveriesFromCourier = container.resolve(
      ListDeliveriesFromCourierService,
    );

    const deliveries = await listDeliveriesFromCourier.execute(Number(id));

    return response.json(classToClass(deliveries));
  }
}
