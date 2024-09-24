import {
  Entity,
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
@Entity({ name: 'users' })
export class UserEntity {
  nome: string;
  email: string;
  senha: string;
  id: string;

  createdAt: string;
  updatedAt: string;
  deletedAt: string;
}
