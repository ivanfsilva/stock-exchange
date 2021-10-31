export class NegocicoesView {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    template(model) {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                      <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                        <th>VOLUME</th>
                      </tr>      
                </thead>
                <tbody>
                    ${model.lista().map(negociacao => {
            return `
                            <tr>
                                <td>?</td>
                                <td>${negociacao.quantidade}</td>
                                <td>${negociacao.valor}</td>
                                <td></td>
                            </tr>
                        `;
        }).join('')}
                </tbody>
            </table>
        `;
    }
    update(model) {
        this.elemento.innerHTML = this.template(model);
    }
}
