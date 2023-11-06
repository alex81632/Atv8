import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  private dadosCompartilhados: string[] = [];

  adicionarDado(dado: string) {
    this.dadosCompartilhados.push(dado);
  }

  obterDados(): string[] {
    return this.dadosCompartilhados;
  }

  apagarDado(dado: string) {
    this.dadosCompartilhados = this.dadosCompartilhados.filter(d => d !== dado);
  }

}
