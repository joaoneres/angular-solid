import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './components/index/index.component';
import { ApiCepService } from 'src/app/shared/services/cep-consult/integrators/api-cep.service';
import { CEP_CONSULT_SERVICE } from 'src/app/shared/services/cep-consult/cep-consult-service.token';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {
    path: '',
    component: IndexComponent,
  }
];

@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  providers: [
    { provide: CEP_CONSULT_SERVICE, useClass: ApiCepService }
  ]
})
export class HomeModule { }
