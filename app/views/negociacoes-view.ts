import { Negociacoes } from "../models/negociacoes.js";

export class NegociacoesView {

    private elemento : HTMLElement;

    constructor(selector:string){
        this.elemento = document.querySelector(selector);
    }

    template(negociacoes:Negociacoes):string {
        //retorna o código html renderizado com dados do app
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                </tr>
            </thead>        
            <tbody> 
            ${negociacoes.lista().map(elemento=>{
                return `
                <tr>
                    <td>data</td>
                    <td>${elemento.quantidade}</td>
                    <td>${elemento.valor}</td>
                </tr>
                `;
            }).join('')}
            </tbody>
        </table>
        `
    }

    update(negociacoes:Negociacoes):void {
        const template = this.template(negociacoes);
        console.log(template);
        this.elemento.innerHTML = template;
    }
}