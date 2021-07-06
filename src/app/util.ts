import { FormControl } from "@angular/forms";

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