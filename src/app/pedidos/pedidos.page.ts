import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Pedido } from '../models';
import { PedidosService } from './pedidos.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.page.html',
  styleUrls: ['./pedidos.page.scss'],
})
export class PedidosPage {

  constructor(private service: PedidosService, private router: Router) { }

  pedidos: Array<Pedido>;

  cancelarPedido(pedido: Pedido) {
    this.service.cancelarPedido(pedido).subscribe(
      s => {
        this.buscar()
      },
      err => {
        Swal.fire({
          text: err['error']['detail'],
          icon: 'error'
        })

      }
    );
  }

  novoPedido() {
    this.router.navigate(['novopedido'])
  }

  ionViewDidEnter() {
    this.buscar();
  }

  private buscar() {
    this.service.buscarPool().subscribe(
      success => {
        this.pedidos = success;
      },
      error => {
        console.log(error);
      }
    );
  }
}
