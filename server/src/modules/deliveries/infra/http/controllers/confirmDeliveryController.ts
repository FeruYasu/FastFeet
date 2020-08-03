import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ConfirmDeliveryService from '@modules/deliveries/services/ConfirmDeliveryService';
import { classToClass } from 'class-transformer';

export default class ConfirmDeliveryController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { filename } = request.file;
    const { io } = request;
    const { id } = request.params;

    const confirmDelivery = container.resolve(ConfirmDeliveryService);

    const delivery = await confirmDelivery.execute({
      product_id: Number(id),
      photoFilename: filename,
    });

    io.sockets.emit('newDeliveryConfirmation', id);

    return response.json(classToClass(delivery));
  }
}
