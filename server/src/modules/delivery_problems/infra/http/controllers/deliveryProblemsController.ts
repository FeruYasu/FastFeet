import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateDeliveryProblemService from '@modules/delivery_problems/services/CreateDeliveryProblemService';

export default class DeliveryProblemsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { delivery_id, description } = request.body;

    const createDeliveryProblem = container.resolve(
      CreateDeliveryProblemService,
    );

    const problem = await createDeliveryProblem.execute({
      delivery_id,
      description,
    });

    return response.json(problem);
  }
}
