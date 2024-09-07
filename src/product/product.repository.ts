import { Injectable } from '@nestjs/common';
import { ProdutcEntity } from './product.entity';

@Injectable()
export class ProdutcRepository {
  private produtcs: ProdutcEntity[] = [];

  listaTodos() {
    return this.produtcs;
  }

  salva(dadosProduto: ProdutcEntity) {
    this.produtcs.push(dadosProduto);
    return dadosProduto;
  }

  private buscaPorId(id: string) {
    const possivelProduto = this.produtcs.find((produtc) => produtc.id === id);

    if (!possivelProduto) {
      throw new Error('Produto não existe');
    }

    return possivelProduto;
  }

  async atualiza(id: string, dadosProduto: Partial<ProdutcEntity>) {
    const dadosNaoAtualizaveis = ['id', 'usuarioId'];
    const produto = this.buscaPorId(id);
    Object.entries(dadosProduto).forEach(([chave, valor]) => {
      if (dadosNaoAtualizaveis.includes(chave)) {
        return;
      }
      produto[chave] = valor;
    });

    return produto;
  }

  async remove(id: string) {
    const produtoRemovido = this.buscaPorId(id);
    this.produtcs = this.produtcs.filter((produtc) => produtc.id !== id);
    return produtoRemovido;
  }
}
