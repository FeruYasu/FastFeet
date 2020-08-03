import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  JoinColumn,
  OneToOne,
} from 'typeorm';

import uploadConfig from '@config/upload';

import Recipient from '@modules/recipients/infra/typeorm/entities/Recipient';
import Courier from '@modules/couriers/infra/typeorm/entities/Courier';
import { Expose } from 'class-transformer';

@Entity('deliveries')
class Delivery {
  @PrimaryColumn()
  id: number;

  @Column()
  recipient_id: number;

  @Column()
  courier_id: number;

  @OneToOne(() => Recipient)
  @JoinColumn({ name: 'recipient_id' })
  recipient: Recipient;

  @OneToOne(() => Courier)
  @JoinColumn({ name: 'courier_id' })
  courier: Courier;

  @Column()
  signature: string;

  @Expose({ name: 'signature_url' })
  getSignatureUrl(): string | null {
    if (!this.signature) {
      return null;
    }

    switch (uploadConfig.driver) {
      case 'disk':
        return `${process.env.APP_API_URL}/files/${this.signature}`;
      default:
        return null;
    }
  }

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
