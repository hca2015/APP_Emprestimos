import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Pedido } from '../models';
import { PoolService } from './pool.service';

@Component({
  selector: 'app-pool',
  templateUrl: './pool.page.html',
  styleUrls: ['./pool.page.scss'],
})
export class PoolPage {

  constructor(private service: PoolService, private router: Router) { }

  pedidos: Array<Pedido>;

  fazerOferta(pedido: Pedido) {
    let navigationExtras: NavigationExtras = {
      state: {
        pedido: pedido
      }
    };
    this.router.navigate(['fazeroferta'], navigationExtras);
  }

  ionViewDidEnter() {
    this.service.buscarPool().subscribe(
      success => {
        console.log(success);
        this.pedidos = success;
      },
      error => {
        console.log(error)
      }
    )
  }

}
