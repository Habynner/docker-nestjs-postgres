import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserRepository } from "./user.repository";
import { EmailEhUnicoValidator, NomeEhUnicoValidator } from "./validator/email-unico.validator";

@Module({
    controllers: [UserController],
    providers: [UserRepository, EmailEhUnicoValidator, NomeEhUnicoValidator]
})
export class UserModule{}