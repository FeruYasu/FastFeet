import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  JoinColumn,
  OneToOne,
} from 'typeorm';

import Recipient from '@modules/recipients/infra/typeorm/entities/Recipient';
import Courier from '@modules/couriers/infra/typeorm/entities/Courier';

@Entity('deliveries')
class Delivery {
  @PrimaryColumn()
  id: string;

  @Column()
  recipient_id: string;

  @Column()
  courier_id: string;

  @OneToOne(() => Recipient)
  @JoinColumn({ name: 'recipient_id' })
  recipient: Recipient;

  @OneToOne(() => Courier)
  @JoinColumn({ name: 'courier_id' })
  courier: Courier;

  @Column()
  signature: string;

  @Column()
  product: string;

  @Column()
  canceled_at: Date;

  @Column()
  start_date: Date;

  @Column()
  end_date: Date;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;
}

export default Delivery;
