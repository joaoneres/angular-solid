import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './components/index/index.component';
import { FunctionalitiesComponent } from './components/functionalities/functionalities.component';
import { WithoutORoutingModule } from './without-o-routing.module';

@NgModule({
  declarations: [
    IndexComponent,
    FunctionalitiesComponent,
  ],
  imports: [
    CommonModule,
    WithoutORoutingModule,
  ]
})
export class WithoutOModule { }
