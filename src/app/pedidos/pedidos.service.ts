import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { Pedido } from '../models';

@Injectable({
  providedIn: 'root'
})
export class PedidosService extends BaseService{
  
  private controller = 'PedidoEmprestimo/';

  buscarPool(){
    return this.http.get<Array<Pedido>>(this.URL + this.controller + 'Usuario');
  }

  cancelarPedido(pedido: Pedido) {
    return this.http.post<any>(this.URL + this.controller + `Cancelar?pedidoid=${pedido.pedidoid}`, {});
  }

  fazerPedido(pedido: Pedido) {
    return this.http.post(this.URL + this.controller + 'Criar', pedido);
  }
}
