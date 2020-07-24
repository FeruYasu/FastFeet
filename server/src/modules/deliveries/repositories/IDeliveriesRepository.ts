import Delivery from '../infra/typeorm/entities/Delivery';
import ICreateDeliveryDTO from '../dtos/ICreateDeliveryDTO';

export default interface IDeliveriesRepository {
  create(data: ICreateDeliveryDTO): Promise<Delivery>;
  save(data: Delivery): Promise<Delivery>;
  deleteById(id: number): Promise<void>;
  cancelById(id: number): Promise<Delivery | undefined>;
  updateById(
    id: number,
    data: ICreateDeliveryDTO,
  ): Promise<Delivery | undefined>;
  listAll(): Promise<Delivery[]>;
  listById(id: number): Promise<Delivery | undefined>;
  listDeliveryFromCourierID(
    courier_id: number,
  ): Promise<Delivery[] | undefined>;
  filterByProduct(product: string): Promise<Delivery[] | undefined>;
}
