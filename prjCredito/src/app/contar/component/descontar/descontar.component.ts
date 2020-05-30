import { Component, OnInit } from '@angular/core';
import { DescontarService } from '../../services';

@Component({
  selector: 'app-descontar',
  templateUrl: './descontar.component.html',
  styleUrls: ['./descontar.component.css']
})
export class DescontarComponent implements OnInit {
  private valor1:number;
  constructor(private descontar : DescontarService) { }

  ngOnInit(): void {
    this.valor1 = 10;
  }
  calcula(valorInserido:number){this
    this.valor1 = this.descontar.descontar(this.valor1, valorInserido);
  }
  deposita(valorInserido:number){
   this.valor1 = this.descontar.depositar(this.valor1, valorInserido);
  }
  saca(valorInserido:number){
    this.valor1 = this.descontar.sacar(this.valor1, valorInserido);
  }
  get pegaValor(){
    return this.valor1;
  }
}
