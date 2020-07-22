import DeliveryProblems from '../infra/typeorm/entities/DeliveryProblems';
import ICreateDeliveryProblemDTO from '../dtos/ICreateDeliveryProblemDTO';

export default interface IDeliveryProblems {
  create(data: ICreateDeliveryProblemDTO): Promise<DeliveryProblems>;
  save(data: DeliveryProblems): Promise<DeliveryProblems>;
  listAll(): Promise<DeliveryProblems[]>;
}
