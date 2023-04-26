import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Parsing {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @Column()
  typeOperation: string;
};
