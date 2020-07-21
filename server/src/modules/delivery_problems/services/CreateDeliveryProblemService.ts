import { injectable, inject } from 'tsyringe';
import IDeliveriesRepository from '../repositories/IDeliveryProblemsRepository';
import DeliveryProblems from '../infra/typeorm/entities/DeliveryProblems';
import ICreateDeliveryProblemDTO from '../dtos/ICreateDeliveryProblemDTO';

@injectable()
class CreateDeliveryProblemsService {
  constructor(
    @inject('DeliveryProblemsRepository')
    private deliveriesRepository: IDeliveriesRepository,
  ) {}

  public async execute(
    data: ICreateDeliveryProblemDTO,
  ): Promise<DeliveryProblems> {
    const newDeliveryProblems = await this.deliveriesRepository.create(data);

    return newDeliveryProblems;
  }
}

export default CreateDeliveryProblemsService;
