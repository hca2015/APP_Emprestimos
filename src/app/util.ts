import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse, HttpResponse, HttpStatusCode } from "@angular/common/http";
import { FormControl } from "@angular/forms";
import { Router } from "@angular/router";
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators"

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
          case 'min':
            erros.push(`Valor deve ser superior a ${element['min']}`)
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

  /**
   *
   */
  constructor(private router: Router) {

  }

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

    return next.handle(req).pipe(
      map((event: HttpEvent<any>) => {
        return event;
      }),
      catchError(
        (
          httpErrorResponse: HttpErrorResponse,
          _: Observable<HttpEvent<any>>
        ) => {
          if (httpErrorResponse.status === HttpStatusCode.Unauthorized) {
            window.localStorage.removeItem('token');
            this.router.navigate(['login']);
          }
          return throwError(httpErrorResponse);
        }
      )
    );

  }
}