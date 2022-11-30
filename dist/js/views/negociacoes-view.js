export class NegociacoesView {
    constructor(selector) {
        this.elemento = document.querySelector(selector);
    }
    template(negociacoes) {
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
            ${negociacoes.lista().map(elemento => {
            let data = `${elemento.data.getDate()}-${elemento.data.getMonth()}-${elemento.data.getFullYear()}`;
            return `
                <tr>
                    <td>${data}</td>
                    <td>${elemento.quantidade}</td>
                    <td>${elemento.valor}</td>
                </tr>
                `;
        }).join('')}
            </tbody>
        </table>
        `;
    }
    update(negociacoes) {
        const template = this.template(negociacoes);
        console.log(template);
        this.elemento.innerHTML = template;
    }
}
