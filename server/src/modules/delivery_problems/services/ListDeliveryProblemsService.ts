import { injectable, inject } from 'tsyringe';
import IDeliveryProblemsRepository from '../repositories/IDeliveryProblemsRepository';
import DeliveryProblems from '../infra/typeorm/entities/DeliveryProblems';

@injectable()
class ListDeliveryProblemsService {
  constructor(
    @inject('DeliveryProblemsRepository')
    private deliveryProblemsRepository: IDeliveryProblemsRepository,
  ) {}

  public async execute(): Promise<DeliveryProblems[]> {
    const deliveryProblems = await this.deliveryProblemsRepository.listAll();

    return deliveryProblems;
  }
}

export default ListDeliveryProblemsService;
