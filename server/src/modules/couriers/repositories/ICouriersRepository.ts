import Courier from '../infra/typeorm/entities/Courier';
import ICreateCourierDTO from '../dtos/ICreateCourierDTO';

export default interface ICourierRepository {
  create(data: ICreateCourierDTO): Promise<Courier>;
  save(user: Courier): Promise<Courier>;
  findByEmail(email: string): Promise<Courier | undefined>;
  findById(id: number): Promise<Courier | undefined>;
  listAll(): Promise<Courier[]>;
  deleteById(id: number): Promise<void>;
  filterByName(name: string): Promise<Courier[] | undefined>;
}
