import ICouriersRepository from '@modules/couriers/repositories/ICouriersRepository';
import { Repository, getRepository } from 'typeorm';
import ICreateCourierDTO from '@modules/couriers/dtos/ICreateCourierDTO';
import Courier from '../entities/Courier';

class CouriersRepository implements ICouriersRepository {
  private ormRepository: Repository<Courier>;

  constructor() {
    this.ormRepository = getRepository(Courier);
  }

  public async create(data: ICreateCourierDTO): Promise<Courier> {
    const courier = this.ormRepository.create(data);

    await this.ormRepository.save(courier);

    return courier;
  }

  public async save(data: ICreateCourierDTO): Promise<Courier> {
    return this.ormRepository.save(data);
  }

  public async findByEmail(email: string): Promise<Courier | undefined> {
    const courier = await this.ormRepository.findOne({ where: { email } });

    return courier;
  }

  public async findById(id: string): Promise<Courier | undefined> {
    const courier = await this.ormRepository.findOne({ where: { id } });

    return courier;
  }
}

export default CouriersRepository;
