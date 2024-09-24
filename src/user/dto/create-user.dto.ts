import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import {
  EmailEhUnico,
  IsNomeUsuarioUnico,
} from '../validator/email-unico.validator';
import { Exclude, Expose } from 'class-transformer';

export class CreateUserDto {
  id: string;

  nome: string;

  nomeUsuario: string;

  email: string;

  senha: string;

  createdAt: string;
  updatedAt: string;
  deletedAt: string;
}
//O decorator @Expose serve para definir o nome da variavel do payload de acordo com o frontend, podemos desenvolver em português e interagir com o front em inglês..
//@IsNomeUsuarioUnico e  @EmailEhUnico são decoratos criados por mim, para verificar se nome e email já existem na base de dados.. (ficam na pasta validator).
