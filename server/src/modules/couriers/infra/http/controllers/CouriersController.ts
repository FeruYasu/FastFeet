import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateCourierService from '@modules/couriers/services/CreateCourierService';
import UpdateCourierService from '@modules/couriers/services/UpdateCourierService';
import ListCouriersService from '@modules/couriers/services/ListCouriersService';
import DeleteCourierService from '@modules/couriers/services/DeleteCourierService';
import ListCourierByIdService from '@modules/couriers/services/ListCourierByIdService';
import FilterCourierByNameService from '@modules/couriers/services/FilterCourierByNameService';

import { classToClass } from 'class-transformer';

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

  public async update(request: Request, response: Response): Promise<Response> {
    const { name, email } = request.body;
    const { id } = request.params;

    const updateCourier = container.resolve(UpdateCourierService);

    const courier = await updateCourier.execute({
      id: Number(id),
      email,
      name,
    });

    return response.json(classToClass(courier));
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const { name } = request.query;

    let couriers;

    if (!name) {
      const listCouriersService = container.resolve(ListCouriersService);

      couriers = await listCouriersService.execute();
    } else {
      const filterCourierByName = container.resolve(FilterCourierByNameService);

      couriers = await filterCourierByName.execute(name);
    }

    return response.json(classToClass(couriers));
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const listCourierById = container.resolve(ListCourierByIdService);

    const courier = await listCourierById.execute(Number(id));

    return response.json(classToClass(courier));
  }

  public async destroy(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { id } = request.params;

    const deleteCourier = container.resolve(DeleteCourierService);

    await deleteCourier.execute(Number(id));

    return response.status(204).json({ message: 'deleted' });
  }
}
