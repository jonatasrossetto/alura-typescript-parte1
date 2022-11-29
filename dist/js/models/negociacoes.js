export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        // retorna a lista porém com referência de memória diferente da lista privada
        return this.negociacoes;
    }
}
