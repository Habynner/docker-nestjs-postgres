/* eslint-disable */
import { Entity, Column, CreateDateColumn, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ProductCharacteristcs } from './product-characteristcs.entity';
import { ProductImagesEntity } from './product-image.entity';

@Entity({ name: 'products' })
export class ProdutcEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'usuario_id', length: 100, nullable: false })
    userId: string;

    @Column({ name: 'nome', length: 100, nullable: false })
    name: string;

    @Column({ name: 'valor', nullable: false })
    value: number;

    @Column({ name: 'quantidade', nullable: false })
    quantity: number;

    @Column({ name: 'descricao', length: 255, nullable: false })
    description: string;

    @Column({ name: 'categoria', length: 100, nullable: false })
    category: string;

    @OneToMany(() => ProductCharacteristcs, (prodCharact) =>
      prodCharact.produto, { cascade: true, eager: true })
    characteristics: ProductCharacteristcs[];

    @OneToMany(() => ProductImagesEntity, (prodImage) =>
      prodImage.produto, { cascade: true, eager: true })
    images: ProductImagesEntity[];


  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;
  @CreateDateColumn({ name: 'updated_at' })
  updatedAt: string;
  @CreateDateColumn({ name: 'deleted_at' })
  deletedAt: string;
}
