import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Aceite } from '../models';
import { ContratosService } from './contratos.service';

@Component({
  selector: 'app-contratos',
  templateUrl: './contratos.page.html',
  styleUrls: ['./contratos.page.scss'],
})
export class ContratosPage {

  constructor(private service: ContratosService,
    private router: Router) { }

  contratos: Array<Aceite>;
  
  ionViewDidEnter() {
    this.buscar();
  }
  
  pedidos(){
    this.router.navigate(['pedidos'])
  }

  buscar() {
    this.service.Get().subscribe(
      success => {
        this.contratos = success;
      },
      error => {
        console.log(error);
      }
    );
  }

}
