import { Request, Response } from 'express';

export default class DeliveriesController {
  public async create(request: Request, response: Response): Promise<Response> {
    return response.json('oi');
  }
}
