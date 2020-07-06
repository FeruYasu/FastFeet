import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateDeliveryService from '@modules/deliveries/services/CreateDeliveryService';
import ListDeliveriesService from '@modules/deliveries/services/ListDeliveriesService';

export default class DeliveriesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { recipient_id, courier_id, product } = request.body;

    const createDelivery = container.resolve(CreateDeliveryService);

    const delivery = await createDelivery.execute({
      recipient_id,
      courier_id,
      product,
    });

    return response.json(delivery);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const listDeliveries = container.resolve(ListDeliveriesService);

    const deliveries = await listDeliveries.execute();

    return response.json(deliveries);
  }
}
