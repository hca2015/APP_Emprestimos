import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { KDTipoTempo, Oferta, Pedido } from '../models';
import { OfertasService } from '../ofertas/ofertas.service';

@Component({
  selector: 'app-fazeroferta',
  templateUrl: './fazeroferta.page.html',
  styleUrls: ['./fazeroferta.page.scss'],
})
export class FazerofertaPage implements OnInit {

  pedido: Pedido;
  ofertaForm: FormGroup;
  TipoTempo = KDTipoTempo;
  valorfinal: number;
  lucrobruto: number;
  taxasdobanco: number;
  lucroliquido: number;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private service: OfertasService) {

    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.pedido = this.router.getCurrentNavigation().extras.state.pedido;

        this.ofertaForm = this.formBuilder.group(
          {
            'pedidoid': new FormControl({ value: this.pedido.pedidoid, disabled: true }, [Validators.required]),
            'valor': new FormControl({ value: this.pedido.valor, disabled: true }, [Validators.required]),
            'taxa': new FormControl('0.15', [Validators.required]),
            'tempo': new FormControl('30', [Validators.required]),
            'tipotempo': new FormControl('', [Validators.required]),
          },
        )
      }
    });
  }

  ngOnInit() {

  }

  calcularRetorno() {
    let valor = this.pedido.valor;
    let taxa = this.ofertaForm.get('taxa').value;
    let tempo = this.ofertaForm.get('tempo').value;

    if (valor && taxa && tempo) {
      this.valorfinal = parseFloat((valor + (valor * (taxa / 100) * tempo)).toFixed(2));
      this.lucrobruto = parseFloat((this.valorfinal - valor).toFixed(2));
      this.taxasdobanco = parseFloat((this.lucrobruto * 0.15).toFixed(2));
      this.lucroliquido = parseFloat((this.lucrobruto - this.taxasdobanco).toFixed(2));
    }
  }

  enviarOferta() {
    if (this.ofertaForm.valid) {
      let oferta: Oferta = this.ofertaForm.value;
      this.service.enviarOferta(oferta).subscribe(
        sucesso => {
          console.log(sucesso);
        },
        erro => {
          console.log(erro)
        }
      );
    }
  }

}
