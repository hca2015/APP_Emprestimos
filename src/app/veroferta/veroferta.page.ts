import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { KDTipoTempo, Oferta, Pedido } from '../models';
import { OfertasService } from '../ofertas/ofertas.service';

@Component({
  selector: 'app-veroferta',
  templateUrl: './veroferta.page.html',
  styleUrls: ['./veroferta.page.scss'],
})
export class VerofertaPage implements OnInit {

  pedido: Pedido;
  ofertaDetalhe: Oferta = null;
  periodo: string;
  visualizacao: number = 0;
  TipoTempo = KDTipoTempo;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private ofertaService: OfertasService) {

    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.pedido = this.router?.getCurrentNavigation()?.extras?.state?.pedido;
      }
    });

  }

  verDetalhe(oferta: Oferta) {
    this.detalhe()
    this.ofertaDetalhe = oferta;
    switch (this.ofertaDetalhe.tipotempo) {
      case KDTipoTempo.Dias.valueOf():
        this.periodo = 'dias'
        break
      case KDTipoTempo.Meses.valueOf():
        this.periodo = 'meses'
        break
      case KDTipoTempo.Anos.valueOf():
        this.periodo = 'anos'
        break
      default:
        this.periodo = 'dsknwd'
        break;
    }

  }

  voltar() {
    this.lista();
  }

  voltarPedidos() {
    this.router.navigate(['pedidos']);
  }

  aceitarOferta() {
    this.ofertaService.aceitarOferta(this.ofertaDetalhe).subscribe(
      sucesso => {
        this.voltarPedidos();
      }
    );;
  }

  recusarOferta() {
    this.ofertaService.cancelarOferta(this.ofertaDetalhe).subscribe(
      sucesso => {
        this.pedido.ofertas = this.pedido.ofertas.filter((o) => o.ofertaid !== this.ofertaDetalhe.ofertaid);
        this.lista()
      }
    );
  }

  lista() {
    this.visualizacao = 0;
    this.ofertaDetalhe = null;
  }

  detalhe() {
    this.visualizacao = 1;
  }

  ngOnInit() {
  }

}
