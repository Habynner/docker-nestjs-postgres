import { Module } from '@nestjs/common';
import { UserModule } from 'src/user/user.module';
import { ProdutcController } from './product.controller';
import { ProdutcRepository } from './product.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdutcEntity } from './product.entity';
import { ProductService } from './product.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProdutcEntity])],
  controllers: [ProdutcController],
  providers: [ProdutcRepository, ProductService],
})
export class ProdutcModule {}
