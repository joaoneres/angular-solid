import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './components/index/index.component';
import { WithoutSRoutingModule } from './without-s-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    WithoutSRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class WithoutSModule { }
