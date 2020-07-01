import ICreateCourierDTO from '@modules/couriers/dtos/ICreateCourierDTO';
import Courier from '@modules/couriers/infra/typeorm/entities/Courier';
import { uuid } from 'uuidv4';
import ICouriersRepository from '../ICouriersRepository';

class FakeCouriersRepository implements ICouriersRepository {
  private couriers: Courier[] = [];

  public async create(data: ICreateCourierDTO): Promise<Courier> {
    const courier = new Courier();

    Object.assign(courier, { id: uuid() }, data);

    this.couriers.push(courier);

    return courier;
  }

  public async save(courier: Courier): Promise<Courier> {
    const findIndex = this.couriers.findIndex(
      findCourier => findCourier.id === courier.id,
    );

    this.couriers[findIndex] = courier;
    return courier;
  }

  public async findByEmail(email: string): Promise<Courier | undefined> {
    const findCourier = this.couriers.find(courier => courier.email === email);

    return findCourier;
  }

  public async findById(id: string): Promise<Courier | undefined> {
    const findCourier = this.couriers.find(courier => courier.id === id);

    return findCourier;
  }
}

export default FakeCouriersRepository;
