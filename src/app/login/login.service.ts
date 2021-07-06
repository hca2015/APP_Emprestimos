import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends BaseService {

  login(login: string, senha: string) {
    return this.http.post(`${this.URL}Identity/Login`, { "EMAIL": login, "Password": senha })
  }

}
