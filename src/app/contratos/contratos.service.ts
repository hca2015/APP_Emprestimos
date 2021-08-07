import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { Aceite } from '../models';

@Injectable({
    providedIn: 'root'
})
export class ContratosService extends BaseService {

    Get() {
        return this.http.get<Array<Aceite>>(`${this.URL}AceiteEmprestimo`)
    }

}
