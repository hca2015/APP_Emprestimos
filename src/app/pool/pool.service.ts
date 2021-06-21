import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { Pedido } from '../models';

@Injectable({
  providedIn: 'root'
})
export class PoolService extends BaseService{

  private controller = 'PedidoEmprestimo';

  buscarPool(){
    return this.http.get<Array<Pedido>>(this.URL + this.controller);
  }
}
