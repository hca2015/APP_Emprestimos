import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Register } from '../models/register';
import { RegistrarService } from './registrar.service';
import { resolveError } from '../util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {

  registrarForm: FormGroup;
  erroSenhaDiferente = false;
  resolveError = resolveError;

  constructor(private service: RegistrarService, private formBuilder: FormBuilder, private router: Router) {
    this.registrarForm = this.formBuilder.group(
      {
        'nome': ['', Validators.compose([Validators.required, Validators.maxLength(60)])],
        'email': ['', Validators.compose([Validators.required, Validators.email, Validators.maxLength(120)])],
        'cpf': ['', Validators.compose([Validators.required, Validators.maxLength(11)])],
        'endereco': ['', Validators.compose([Validators.required, Validators.maxLength(250)])],
        'bairro': ['', Validators.compose([Validators.required, Validators.maxLength(60)])],
        'cep': ['', Validators.compose([Validators.required, Validators.maxLength(8)])],
        'cidade': ['', Validators.compose([Validators.required, Validators.maxLength(60)])],
        'estado': ['', Validators.compose([Validators.required, Validators.maxLength(2)])],
        'password': ['', Validators.compose([Validators.required, Validators.maxLength(32)])],
        'confirmpassword': ['', Validators.compose([Validators.required, Validators.maxLength(32)])],
      }
    )
  }

  ngOnInit() {
  }

  onSubmit() {

    if (this.registrarForm.get('password').value != this.registrarForm.get('confirmpassword').value) {
      this.erroSenhaDiferente = true;
      return;
    }


    if (this.registrarForm.valid) {

      let user = this.registrarForm.value as Register;
      user.cpf = user['cpf'].toString();
      user.cep = user['cep'].toString();

      this.service.registrar(user).subscribe(
        success => {
          let token = success['token'];
          window.localStorage.setItem('token', token);
          this.router.navigate(['/pool']);
        },
        error => {
          this.erroSenhaDiferente = false;
          document.getElementById('errosSenha').innerHTML = error['error'];
        }
      )
    }
  }
}
