import { Entity, PrimaryGeneratedColumn, Column, Unique } from 'typeorm';

@Unique('unique', ['name'])
@Entity()
export class Category {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

}