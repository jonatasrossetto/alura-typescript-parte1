export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get data() {
        //programação defensiva, evita que o return seja passado com a mesma referência da variável interna ao objeto //
        const data = new Date(this._data.getTime());
        return data;
    }
    get volume() {
        return (this.quantidade * this.valor);
    }
}
