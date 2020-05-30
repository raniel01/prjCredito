import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DescontarService {
  private valor1:number;
  constructor() { }
  descontar(valor1, valor2:number):number{
    return valor1-valor2;
  }
  depositar(valor1, valor2:number):number{
    return valor1+valor2;
  }
  sacar(valor1, valor2:number):number{
    return valor1-valor2;
  }
}
