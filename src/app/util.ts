import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";

export function resolveError(obj: FormControl) {
  let erros = []
  if (obj && obj.value && obj.errors) {
    for (const key in obj.errors) {
      if (Object.prototype.hasOwnProperty.call(obj.errors, key)) {
        const element = obj.errors[key];
        let a = ''

        switch (key) {
          case 'maxlength':
            erros.push(`Não pode exceder ${element['requiredLength']} caracteres`)
            break;
          case 'required':
            erros.push(`Campo obrigatorio`)
            break;
          case 'email':
            erros.push(`Email inválido`)
            break;
          default:
            erros.push(`erro desconhecido ${key}`)
            break;
        }
      }
    }
  }
  return erros;
}


export class AuthInterceptor implements HttpInterceptor {
  hasToken: boolean;

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (window.localStorage.getItem('token'))
      this.hasToken = true;
    else
      this.hasToken = false;

    if (this.hasToken) {
      req = req.clone({
        setHeaders: {
          'Content-Type': 'application/json; charset=utf-8',
          'Accept': 'application/json',
          'Authorization': `Bearer ${window.localStorage.getItem('token')}`,
        },
      });
    }

    return next.handle(req);
  }
}