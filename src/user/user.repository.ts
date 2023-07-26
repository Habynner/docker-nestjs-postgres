import { Injectable } from "@nestjs/common"
import { UserEntity } from "./user.entity";
import { CreateUserDto } from "./dto/create-user.dto";
import { v4 as uuid } from 'uuid';

@Injectable()
export class UserRepository {
    private users: Array<CreateUserDto> = []

    async salvar(createUserDto: CreateUserDto){
        try{
        createUserDto.id = uuid()
         await this.users.push(createUserDto)
        return createUserDto
        } catch(error){

        throw new Error('Erro no cadastro de usuário.')
        }
    }

    async list(){
        return this.users
    }

    async existeComEmail(email: string) {
        const possivelUsuario = this.users.find(
            usuario => usuario.email === email
        );

        return possivelUsuario !== undefined;
    }

    async existeComNome(name: string) {
        const possivelUsuario = this.users.find(
            usuario => usuario.nome === name
        );

        return possivelUsuario !== undefined;
    }

private findUserById(id: string){
    const findUser = this.users.find(
        saveUser => saveUser.id === id
    );
    if(!findUser){
        throw new Error('This user does not exist.');
    }
    return findUser;
}
async findByName(nomeUsuario: string): Promise<CreateUserDto> {
    const usuarioEncontrado = await this.users.find(usuario => usuario.nomeUsuario == nomeUsuario);

    return usuarioEncontrado;
}
async update(id: string, data: Partial<UserEntity>){
    const user = this.findUserById(id);
    Object.entries(data).forEach(([key, value]) => {
        if(key === 'id'){
            return;
        }
        user[key] = value;
    });
    return user;
}

async remove(id: string){
    const user = this.findUserById(id);
    this.users = this.users.filter(
        saveUser => saveUser.id !== id
    )
    return user;
}
}