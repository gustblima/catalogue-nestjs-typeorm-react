import { Entity, PrimaryGeneratedColumn, Column, Unique, ManyToOne, JoinColumn, Index, OneToMany } from 'typeorm';

@Entity()
export class Deal {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fixedAmount: number;

  @Column()
  percentageAmount: number;

  @Column()
  isActive: boolean;

}