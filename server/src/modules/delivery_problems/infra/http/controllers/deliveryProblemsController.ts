import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateDeliveryProblemService from '@modules/delivery_problems/services/CreateDeliveryProblemService';
import ListDeliveryProblemsService from '@modules/delivery_problems/services/ListDeliveryProblemsService';

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

  public async index(request: Request, response: Response): Promise<Response> {
    const listDeliveryProblems = container.resolve(ListDeliveryProblemsService);

    const deliveryProblems = await listDeliveryProblems.execute();

    return response.json(deliveryProblems);
  }
}
