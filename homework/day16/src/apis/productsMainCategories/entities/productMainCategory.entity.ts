import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class MainCategory {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  maincategory: string;
}
