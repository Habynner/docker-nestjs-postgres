/* eslint-disable */
import { Type } from 'class-transformer';
import {
    ArrayMinSize,
    IsArray,
    IsNotEmpty,
    IsNumber,
    IsOptional,
    IsString,
    IsUUID,
    Min,
    ValidateNested,
} from 'class-validator';
import { ProductCharacteristicsDTO, ProductImageDTO } from './createProduct.dto';

export class UpdateProductDTO {

    @IsOptional()
    @IsUUID()
    userId: string;

    @IsString()
    @IsNotEmpty({ message: 'Nome do produto não pode ser vazio' })
    @IsOptional()
    name: string;

    @IsNumber({ maxDecimalPlaces: 2, allowNaN: false, allowInfinity: false })
    @IsOptional()
    @Min(1, { message: 'O valor precisa ser maior que zero' })
    @IsOptional()
    value: number;

    @IsNumber()
    @Min(0, { message: 'Quantidade mínima inválida' })
    @IsOptional()
    availableQuantity: number;

    @IsString()
    @IsOptional()
    description: string;

    @ValidateNested()
    @IsArray()
    @ArrayMinSize(3)
    @Type(() => ProductCharacteristicsDTO)
    @IsOptional()
    characteristics: ProductCharacteristicsDTO[];

    @ValidateNested()
    @IsArray()
    @ArrayMinSize(1)
    @Type(() => ProductImageDTO)
    @IsOptional()
    images: ProductImageDTO[];

    @IsString()
    @IsNotEmpty({ message: 'Categoria do produto não pode ser vazia' })
    @IsOptional()
    category: string;
}
