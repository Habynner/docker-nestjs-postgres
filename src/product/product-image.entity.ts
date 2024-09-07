/* eslint-disable */
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { ProdutcEntity } from './product.entity';

@Entity({ name :'product_iamge'})
export class ProductImagesEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'url', length: 100, nullable: false })
    url: string;

    @Column({ name: 'descricao', length: 100, nullable: false })
    description: string;

    @ManyToOne(() => ProdutcEntity, (produto) => produto.characteristics, { orphanedRowAction: 'delete', onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    produto: ProdutcEntity;
}