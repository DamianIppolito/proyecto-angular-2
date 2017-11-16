import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'pruebas'})

export class PruebasPipe implements PipeTransform{
  transform(value, por) : string {
      let porv:number = parseInt(por);
      let valuev:number = parseInt(value);
      let result:string = "La multiplicación de " + valuev + " x " + porv + " = " + (valuev*porv);

      return result;
  }
}
