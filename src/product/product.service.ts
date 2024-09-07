import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProdutcEntity } from './product.entity';
import { Repository } from 'typeorm';
import { CreateProductDTO } from './dto/createProduct.dto';
import { ProductListDTO } from './dto/productList.dto';
import { UpdateProductDTO } from './dto/updateProduct.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProdutcEntity)
    private readonly productRepository: Repository<ProdutcEntity>,
  ) {}

  async createProduct(productEntity: CreateProductDTO) {
    return await this.productRepository.save(productEntity);
  }

  async productsList() {
    const savedProdutcs = await this.productRepository.find();
    const productsList = savedProdutcs.map(
      (prod) =>
        new ProductListDTO(
          prod.id,
          prod.userId,
          prod.name,
          prod.value,
          prod.quantity,
          prod.description,
          prod.category,
        ),
    );

    return productsList;
  }

  async updateProduct(id: string, productEntity: UpdateProductDTO) {
    return await this.productRepository.update(id, productEntity);
  }

  async deleteUProduct(id: string) {
    return await this.productRepository.delete(id);
  }
}
