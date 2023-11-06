import { Component } from '@angular/core';
import { TodoListService } from './todo-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  novoDado: string = '';

  constructor(private todoListService: TodoListService) {}

  adicionarDado(dado: string) {
    this.todoListService.adicionarDado(dado);
  }

  obterDados(): string[] {
    return this.todoListService.obterDados();
  }

  apagarDado(dado: string) {
    this.todoListService.apagarDado(dado);
  }

}
