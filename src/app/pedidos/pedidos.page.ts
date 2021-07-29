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

  verOfertas(pedido: Pedido){

    if(pedido.ofertas.length == 0){
      Swal.fire({
        text: 'Pedido sem ofertas no momento',
        timer: 2500,
        showCancelButton: false,
        showConfirmButton: false,
        icon: 'warning'
      })
      return;
    }

    let navigationExtras: NavigationExtras = {
      state: {
        pedido: pedido
      }
    };
    this.router.navigate(['veroferta'], navigationExtras);
  }

  buscar() {
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
