import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  protected URL = 'http://localhost:5000/api/'

  constructor(protected http: HttpClient, private router: Router) { }

  usuarioLogado(): boolean {
    let token = window.localStorage.getItem('token');
    if (!token) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
