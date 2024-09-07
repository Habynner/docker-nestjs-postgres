import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { ProductCharacteristcs } from 'src/product/product-characteristcs.entity';
import { ProductImagesEntity } from 'src/product/product-image.entity';
import { ProdutcEntity } from 'src/product/product.entity';
import { UserEntity } from 'src/user/user.entity';

@Injectable()
export class DbConfigService implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}

  createTypeOrmOptions(connectionName?: string): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: this.configService.get<string>('DB_HOST'),
      port: this.configService.get<number>('DB_PORT'),
      username: this.configService.get<string>('DB_USERNAME'),
      password: this.configService.get<string>('DB_PASSWORD'),
      database: this.configService.get<string>('DB_NAME'),
      entities: [
        UserEntity,
        ProdutcEntity,
        ProductCharacteristcs,
        ProductImagesEntity,
      ],
      synchronize: true,
    };
  }
}
