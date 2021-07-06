import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  error = false;

  constructor(private service: LoginService, private formBuilder: FormBuilder, private router: Router) {
    this.loginForm = this.formBuilder.group(
      {
        'email': [],
        'password': [],
      }
    )
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.service.login(this.loginForm.get('email').value, this.loginForm.get('password').value).subscribe(
        success => {
          let token = success['token'];
          window.localStorage.setItem('token', token);
          this.router.navigate(['/pool']);
        },
        error => {
          this.error = true;
          console.log(error);
        }
      )
    }
  }
}
