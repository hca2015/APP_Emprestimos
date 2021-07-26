import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Pedido, KDTipoTempo, Oferta } from '../models';
import { resolveError } from '../util';
import { PedidosService } from '../pedidos/pedidos.service';

@Component({
  selector: 'app-novopedido',
  templateUrl: './novopedido.page.html',
  styleUrls: ['./novopedido.page.scss'],
})
export class NovopedidoPage implements OnInit {

  pedidoForm: FormGroup;
  resolveError = resolveError;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private service: PedidosService) {

    this.pedidoForm = this.formBuilder.group(
      {
        'valor': new FormControl(1000 , Validators.compose([Validators.required, Validators.min(1000)])),
      },
    )
  }

  ngOnInit() {

  }

  fazerPedido() {
    if (this.pedidoForm.valid) {
      let pedido: Pedido = this.pedidoForm.value;
      //pedido.usuario = {};
      this.service.fazerPedido(pedido).subscribe(
        sucesso => {
          this.router.navigateByUrl('pedidos')
        },
        erro => {
          console.log(erro)
        }
      );
    }
  }

}
