/* eslint-disable */
// class ListaCaracteristicaProdutoDTO {
//     name: string;
//     description: string;
// }

// class ListaImagemProdutoDTO {
//     url: string;
//     description: string;
// }

export class ProductListDTO {
    constructor(
        readonly id: string,
        readonly userId: string,
        readonly name: string,
        readonly value: number,
        readonly quantity: number,
        readonly description: string,
        readonly category: string,
        // readonly characteristics: ListaCaracteristicaProdutoDTO[],
        // readonly images: ListaImagemProdutoDTO[],
    ) {}
}
