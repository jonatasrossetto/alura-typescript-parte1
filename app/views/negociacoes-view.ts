import { Negociacoes } from "../models/negociacoes.js";
import { View } from "./view.js";

export class NegociacoesView extends View<Negociacoes> {

    protected template(negociacoes:Negociacoes):string {
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
                //let data = `${elemento.data.getDate()}-${elemento.data.getMonth()}-${elemento.data.getFullYear()}`;
                return `
                <tr>
                    <td>
                        ${this.formatar(elemento.data)}
                    </td>
                    <td>
                        ${elemento.quantidade}
                    </td>
                    <td>
                        ${elemento.valor}
                    </td>
                </tr>
                `;
            }).join('')}
            </tbody>
        </table>
        <script>alert('oi')</script>
        `
    }

    private formatar(data:Date):string {
        return new Intl.DateTimeFormat().format(data)
    }
}