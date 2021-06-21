import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  protected URL = 'http://localhost:5000/api/'

  constructor(protected http: HttpClient) { }
}
