import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Oferta } from '../models';
import { OfertasService } from './ofertas.service';


@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.page.html',
  styleUrls: ['./ofertas.page.scss'],
})
export class OfertasPage {

  constructor(private service: OfertasService, private router: Router) { }

  ofertas: Array<Oferta>;

  cancelarOferta(oferta: Oferta) {
    this.service.cancelarOferta(oferta).subscribe(
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

  ionViewDidEnter() {
    this.buscar();
  }

  private buscar() {
    this.service.buscar().subscribe(
      success => {
        this.ofertas = success;
      },
      error => {
        console.log(error);
      }
    );
  }
}
