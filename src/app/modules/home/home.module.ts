import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './components/index/index.component';
import { WelcomeComponent } from './components/widgets/welcome/welcome.component';
import { WeatherComponent } from './components/widgets/weather/weather.component';

const routes: Route[] = [
  {
    path: '',
    component: IndexComponent,
  }
];

@NgModule({
  declarations: [
    IndexComponent,
    WelcomeComponent,
    WeatherComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class HomeModule { }
