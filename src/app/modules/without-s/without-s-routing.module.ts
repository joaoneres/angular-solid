import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { IndexComponent } from './components/index/index.component';

const routes: Route[] = [
  {
    path: '',
    component: IndexComponent,
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [],
  providers: [],
})
export class WithoutSRoutingModule { }
