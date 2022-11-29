import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private negociacoes: Array<Negociacao> = [];

    adiciona(negociacao: Negociacao):void{
        this.negociacoes.push(negociacao);
    }

    lista():ReadonlyArray<Negociacao> {
        // retorna a lista porém com referência de memória diferente da lista privada
        return this.negociacoes;
    }

}