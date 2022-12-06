import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private negociacoes: Array<Negociacao> = [];

    public adiciona(negociacao: Negociacao):void{
        this.negociacoes.push(negociacao);
    }

    public lista():ReadonlyArray<Negociacao> {
        // retorna a lista porém com referência de memória diferente da lista privada
        return this.negociacoes;
    }

}