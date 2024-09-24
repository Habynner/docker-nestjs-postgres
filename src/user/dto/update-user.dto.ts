import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';
import { EmailEhUnico } from '../validator/email-unico.validator';

export class UpdateUserDto {
  nome: string;

  nomeUsuario: string;

  email: string;

  senha: string;

  createdAt: string;
  updatedAt: string;
  deletedAt: string;
}
