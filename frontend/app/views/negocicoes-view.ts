import { Negociacoes } from "../models/negociacoes.js";
import { View } from "./view.js";

export class NegocicoesView extends View {

    template( model: Negociacoes ): string {
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
                                <td>${new Intl.DateTimeFormat().format(negociacao.data)}</td>
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

    update( model: Negociacoes ): void {
        this.elemento.innerHTML = this.template(model);
    }
}
