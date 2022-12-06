export class Negociacao {
    
    constructor(
        private _data: Date, 
        public readonly quantidade: number, 
        public readonly valor: number
    ) {}

    get data() : Date {
        //programação defensiva, evita que o return seja passado com a mesma referência da variável interna ao objeto //
        const data = new Date(this._data.getTime());
        return data;
    }
    
    get volume() : number{
        return (this.quantidade * this.valor);
    }

    public static criaDe(dataString: string, quantidadeString: string, valorString: string):Negociacao{
        const exp = /-/g; //expressão regular
        const data = new Date(dataString.replace(exp,','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(data,quantidade,valor);
    }


}