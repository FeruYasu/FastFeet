import ICreateCourierDTO from '@modules/couriers/dtos/ICreateCourierDTO';
import Courier from '@modules/couriers/infra/typeorm/entities/Courier';
import ICouriersRepository from '../ICouriersRepository';

class FakeCouriersRepository implements ICouriersRepository {
  private couriers: Courier[] = [];

  public async create(data: ICreateCourierDTO): Promise<Courier> {
    const courier = new Courier();

    Object.assign(courier, { id: this.couriers.length + 1 }, data);

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

  public async findById(id: number): Promise<Courier | undefined> {
    const findCourier = this.couriers.find(courier => courier.id === id);

    return findCourier;
  }

  public async listAll(): Promise<Courier[]> {
    return this.couriers;
  }

  public async deleteById(id: number): Promise<void> {
    const newArray = this.couriers.filter(findCourier => findCourier.id !== id);

    this.couriers = newArray;
  }

  public async filterByName(name: string): Promise<Courier[] | undefined> {
    const filtered = this.couriers.filter(findDelivery =>
      findDelivery.name.includes(name),
    );

    return filtered;
  }
}

export default FakeCouriersRepository;
