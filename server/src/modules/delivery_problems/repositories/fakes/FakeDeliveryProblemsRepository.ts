import { uuid } from 'uuidv4';

import ICreateDeliveryProblemDTO from '@modules/delivery_problems/dtos/ICreateDeliveryProblemDTO';
import DeliveryProblems from '@modules/delivery_problems/infra/typeorm/entities/DeliveryProblems';
import IDeliveryProblemsRepository from '../IDeliveryProblemsRepository';

class FakeDeliveryProblemsRepository implements IDeliveryProblemsRepository {
  private delivery_problems: DeliveryProblems[] = [];

  public async create(
    data: ICreateDeliveryProblemDTO,
  ): Promise<DeliveryProblems> {
    const delivery_problem = new DeliveryProblems();

    Object.assign(delivery_problem, { id: uuid() }, data);

    this.delivery_problems.push(delivery_problem);

    return delivery_problem;
  }

  public async save(
    delivery_problem: DeliveryProblems,
  ): Promise<DeliveryProblems> {
    const findIndex = this.delivery_problems.findIndex(
      findDeliveryProblems => findDeliveryProblems.id === delivery_problem.id,
    );

    this.delivery_problems[findIndex] = delivery_problem;
    return delivery_problem;
  }

  public async listAll(): Promise<DeliveryProblems[]> {
    return this.delivery_problems;
  }
}

export default FakeDeliveryProblemsRepository;
