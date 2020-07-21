import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateDeliveryService from '@modules/deliveries/services/CreateDeliveryService';
import ListDeliveriesService from '@modules/deliveries/services/ListDeliveriesService';
import ListDeliveryByIdService from '@modules/deliveries/services/ListDeliveryByIdService';
import DeleteDeliveryService from '@modules/deliveries/services/DeleteDeliveryService';
import UpdateDeliveryService from '@modules/deliveries/services/UpdateDeliveryService';
import FilterDeliveriesService from '@modules/deliveries/services/FilterDeliveriesService';

import { classToClass } from 'class-transformer';

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
    const { product } = request.query;

    let deliveries;

    if (!product) {
      const listDeliveries = container.resolve(ListDeliveriesService);

      deliveries = await listDeliveries.execute();
    } else {
      const filterDelivery = container.resolve(FilterDeliveriesService);

      deliveries = await filterDelivery.execute(product.toString());
    }

    return response.json(classToClass(deliveries));
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const listDeliveries = container.resolve(ListDeliveryByIdService);
    const { id } = request.params;

    const deliveries = await listDeliveries.execute(Number(id));

    return response.json(classToClass(deliveries));
  }

  public async destroy(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { id } = request.params;

    const deleteDelivery = container.resolve(DeleteDeliveryService);

    await deleteDelivery.execute(Number(id));

    return response.status(204).json({ message: 'deleted' });
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const updateDelivery = container.resolve(UpdateDeliveryService);
    const { id } = request.params;
    const { recipient_id, courier_id, product } = request.body;

    const deliveries = await updateDelivery.execute(Number(id), {
      recipient_id,
      courier_id,
      product,
    });

    return response.json(deliveries);
  }
}
