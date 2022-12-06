import { View } from "./view.js";
export class NegociacoesView extends View {
    template(negociacoes) {
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
            ${negociacoes.lista().map(elemento => {
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
        `;
    }
    formatar(data) {
        return new Intl.DateTimeFormat().format(data);
    }
}
