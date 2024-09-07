import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { randomUUID } from 'crypto';

import { UpdateProductDTO } from './dto/updateProduct.dto';
import { CreateProductDTO } from './dto/createProduct.dto';
import { ProdutcEntity } from './product.entity';
import { ProdutcRepository } from './product.repository';
import { NestResponseBuilder } from 'src/core/http/nest-response-builder';
import { ProductService } from './product.service';

@Controller('product')
export class ProdutcController {
  constructor(
    private readonly productRepository: ProdutcRepository,
    private readonly productService: ProductService,
  ) {}

  @Post()
  async criaNovo(@Body() createProductDto: CreateProductDTO) {
    // const product = new ProdutcEntity();

    // product.id = randomUUID();
    // product.name = createProductDto.name;
    // product.usuerId = createProductDto.usrerId;
    // product.value = createProductDto.value;
    // product.quantity = createProductDto.quantity;
    // product.description = createProductDto.description;
    // product.category = createProductDto.category;
    // product.characteristics = createProductDto.characteristics;
    // product.images = createProductDto.images;

    const produtoCadastrado = await this.productService.createProduct(
      createProductDto,
    );
    return new NestResponseBuilder()
      .comStatus(HttpStatus.CREATED)
      .comHeader({
        Location: `/products/${produtoCadastrado.name}`,
      })
      .comBody(produtoCadastrado)
      .build();
  }

  @Get()
  async listaTodos() {
    return this.productService.productsList();
  }

  @Put('/:id')
  async atualiza(
    @Param('id') id: string,
    @Body() productEntity: UpdateProductDTO,
  ) {
    const produtoAlterado = await this.productService.updateProduct(
      id,
      productEntity,
    );

    return {
      mensagem: 'produto atualizado com sucesso',
      produto: produtoAlterado,
    };
  }

  @Delete('/:id')
  async remove(@Param('id') id: string) {
    const produtoRemovido = await this.productService.deleteUProduct(id);

    return {
      mensagem: 'produto removido com sucesso',
      produto: produtoRemovido,
    };
  }
}
