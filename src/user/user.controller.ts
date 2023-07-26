import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put } from "@nestjs/common";
import { UserRepository } from "./user.repository";
import { CreateUserDto } from "./dto/create-user.dto";
import { UserEntity } from "./user.entity";
import { v4 as uuid } from 'uuid';
import { UserListDto } from "./dto/userList.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { NestResponse } from "../core/http/nest-response";
import { NestResponseBuilder } from "../core/http/nest-response-builder";

@Controller('/users')
export class UserController {

    constructor(private userRepository: UserRepository){}

    @Post()
    async createUser(@Body() createUserDto: CreateUserDto): Promise<NestResponse>{
        // const userEntity = new UserEntity();
        // userEntity.email = createUserDto.email;
        // userEntity.senha = createUserDto.senha;
        // userEntity.name = createUserDto.nome;
        // userEntity.name = createUserDto.nomeUsuario;
        // userEntity.id = uuid();
        const createdUser = await this.userRepository.salvar(createUserDto);
      return new NestResponseBuilder()
            .comStatus(HttpStatus.CREATED)
            .comHeader({
                'Location': `/useres/${createdUser.nomeUsuario}`
                })
            .comBody(createdUser)
            .build();

        // return
        // return {
        //     user: new UserListDto(userEntity.id, userEntity.name),
        //      message: 'User has been created'};

    }

    @Get()
    async usersList(){
        const userDb = await this.userRepository.list();
        const userList = userDb.map( user => new UserListDto(
            user.id,
            user.nome
        ));
        return userList;
    }
    @Get(':nomeDeUsuario')
    async usersByName(@Param('nomeDeUsuario') nomDeUsuario: string): Promise<UserEntity>{
        const userFind = await this.userRepository.findByName(nomDeUsuario)
        if(!userFind){
            throw new NotFoundException({
                statusCode: HttpStatus.NOT_FOUND,
                message: 'User not found.'
            });
        }
        return userFind;
    }

    @Put('/:id')
    async updateUser(@Param('id') id: string, @Body() newData: UpdateUserDto){
        const userUpdated = await this.userRepository.update(id, newData);

        return {
            user: userUpdated,
            message: `The user ${newData.nome} has been updated.`
        }

    }

    @Delete('/:id')
    async removeUser(@Param('id') id: string){
        const userRemoved = await this.userRepository.remove(id);

        return {
            user: userRemoved,
            message: `The user ${userRemoved.nome} has been deleted.`
        }
    }
}
