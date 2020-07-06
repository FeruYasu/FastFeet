import Delivery from '../infra/typeorm/entities/Delivery';
import ICreateDeliveryDTO from '../dtos/ICreateDeliveryDTO';

export default interface IDeliveriesRepository {
  create(data: ICreateDeliveryDTO): Promise<Delivery>;
  save(data: Delivery): Promise<Delivery>;
  listAll(): Promise<Delivery[]>;
}
