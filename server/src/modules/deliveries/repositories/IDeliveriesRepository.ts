import Delivery from '../infra/typeorm/entities/Delivery';
import ICreateDeliveryDTO from '../dtos/ICreateDeliveryDTO';

export default interface IDeliveriesRepository {
  create(data: ICreateDeliveryDTO): Promise<Delivery>;
  save(data: Delivery): Promise<Delivery>;
  deleteById(id: string): Promise<void>;
  updateById(
    id: string,
    data: ICreateDeliveryDTO,
  ): Promise<Delivery | undefined>;
  listAll(): Promise<Delivery[]>;
  listById(id: string): Promise<Delivery | undefined>;
}
