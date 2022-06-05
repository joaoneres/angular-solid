import { Component, OnInit } from '@angular/core';
import { WidgetBehavior } from '../../../interfaces/widget-behavior.interface';
import { WidgetContentInterface } from '../../../interfaces/widget-content.interface';

@Component({
  selector: 'app-home-widgets-weather',
  templateUrl: './weather.component.html',
  styles: [
  ]
})
export class WeatherComponent implements OnInit, WidgetContentInterface, WidgetBehavior {
  title: string = 'Previsão do tempo';
  subtitle: string = 'Com este widget você consegue visualizar a previsão do tempo!';
  rainPossibility: string = 'Não';
  temperature: number = 0;

  constructor() { }
  ngOnInit(): void { }

  like(): void {
    alert('Você gostou do widget: ' + this.title);
  }

  unlike(): void {
    alert('Você não gostou do widget: ' + this.title);
  }

  reload(): void {
    this.rainPossibility = this.getRainPossibility();
    this.temperature = this.getTemperature();
  }

  getRainPossibility(): string {
    let possibilityArray = ['Sim', 'Não'];
    return possibilityArray[Math.floor(Math.random() * possibilityArray.length)];
  }

  getTemperature(): number {
    return Math.random() * 10;
  }
}
