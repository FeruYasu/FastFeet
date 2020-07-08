import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export default class CreateDeliveries1593952965281
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'deliveries',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'recipient_id',
            type: 'uuid',
          },
          {
            name: 'courier_id',
            type: 'uuid',
          },
          {
            name: 'signature',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'product',
            type: 'varchar',
          },
          {
            name: 'canceled_at',
            type: 'timestamp',
            isNullable: true,
          },
          {
            name: 'start_date',
            type: 'timestamp',
            isNullable: true,
          },
          {
            name: 'end_date',
            type: 'timestamp',
            isNullable: true,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );

    await queryRunner.createForeignKey(
      'deliveries',
      new TableForeignKey({
        name: 'RecipientID',
        columnNames: ['recipient_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'recipients',
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }),
    );

    await queryRunner.createForeignKey(
      'deliveries',
      new TableForeignKey({
        name: 'CourierID',
        columnNames: ['courier_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'couriers',
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('deliveries', 'CourierID');
    await queryRunner.dropForeignKey('deliveries', 'RecipientID');
    await queryRunner.dropTable('deliveries');
  }
}
