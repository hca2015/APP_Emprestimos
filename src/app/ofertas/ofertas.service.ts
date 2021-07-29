import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { Oferta } from '../models';

@Injectable({
    providedIn: 'root'
})
export class OfertasService extends BaseService {
    
    aceitarOferta(oferta: Oferta) {
        return this.http.post(this.URL + 'OfertaEmprestimo/Aceitar', oferta);
    }    
    cancelarOferta(oferta: Oferta) {
        return this.http.post(this.URL + 'OfertaEmprestimo/Cancelar', oferta);
    }
    enviarOferta(oferta: Oferta) {
        return this.http.post(this.URL + 'OfertaEmprestimo/Criar', oferta);
    }
    buscar(){
        return this.http.get<Array<Oferta>>(this.URL + 'OfertaEmprestimo')
    }
}