import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { Oferta } from '../models';

@Injectable({
    providedIn: 'root'
})
export class OfertasService extends BaseService {
    enviarOferta(oferta: Oferta) {
        return this.http.post(this.URL + 'OfertaEmprestimo/Criar', oferta);
    }
}