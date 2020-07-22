import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CancelDeliveryService from '@modules/deliveries/services/CancelDeliveryService';

export default class CancelDeliveryController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const cancelDelivery = container.resolve(CancelDeliveryService);

    const delivery = await cancelDelivery.execute(Number(id));

    return response.json(delivery);
  }
}
