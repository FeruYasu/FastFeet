import Courier from '../infra/typeorm/entities/Courier';
import ICreateCourierDTO from '../dtos/ICreateCourierDTO';

export default interface ICourierRepository {
  create(data: ICreateCourierDTO): Promise<Courier>;
  save(user: Courier): Promise<Courier>;
  findByEmail(email: string): Promise<Courier | undefined>;
  findById(id: string): Promise<Courier | undefined>;
}
