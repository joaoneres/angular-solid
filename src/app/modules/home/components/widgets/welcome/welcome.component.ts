import { Component, OnInit } from '@angular/core';
import { WidgetContentInterface } from '../../../interfaces/widget-content.interface';

@Component({
  selector: 'app-home-widgets-welcome',
  templateUrl: './welcome.component.html',
})
export class WelcomeComponent implements OnInit, WidgetContentInterface {
  title: string = 'Seja bem-vindo!';
  subtitle: string = 'Aqui você encontra os melhores widgets para a sua aplicação!';

  constructor() { }
  ngOnInit(): void {}

  like(): void {
    alert('Você gostou do widget: ' + this.title);
  }

  unlike(): void {
    alert('Você não gostou do widget: ' + this.title);
  }
}
