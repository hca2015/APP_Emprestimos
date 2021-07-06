import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { Register } from '../models/register';

@Injectable({
  providedIn: 'root'
})
export class RegistrarService extends BaseService {
  registrar(user: Register) {
    return this.http.post(`${this.URL}Identity/Criar`, user, { headers: { 'Content-Type': 'application/json' } })
  }
}
