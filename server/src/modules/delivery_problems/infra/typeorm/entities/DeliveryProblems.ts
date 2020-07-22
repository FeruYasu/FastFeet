import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

import Delivery from '@modules/deliveries/infra/typeorm/entities/Delivery';

@Entity('delivery_problems')
class DeliveryProblems {
  @PrimaryColumn()
  id: number;

  @Column()
  delivery_id: number;

  @ManyToOne(() => Delivery)
  @JoinColumn({ name: 'delivery_id', referencedColumnName: 'id' })
  delivery: Delivery;

  @Column()
  description: string;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;
}

export default DeliveryProblems;
