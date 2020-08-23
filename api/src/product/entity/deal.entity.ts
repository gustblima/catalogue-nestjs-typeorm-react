import { Entity, PrimaryGeneratedColumn, Column, Unique, ManyToOne, JoinColumn, Index, OneToMany } from 'typeorm';

@Entity()
@Index(['startsAt', 'expiresAt'])
export class Deal {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fixedAmount: number;

  @Column()
  percentageAmount: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
  startsAt: Date;
 
  @Column({ type: 'timestamp', nullable: true })
  expiresAt: Date;

}