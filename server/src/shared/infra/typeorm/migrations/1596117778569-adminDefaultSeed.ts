import { getRepository, MigrationInterface, QueryRunner } from 'typeorm';
import hashPassword from '../seed/admin.seed';

export default class adminDefaultSeed1596117778569
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const adminSeed = await hashPassword();
    await getRepository('users').save(adminSeed);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
