import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'without-o',
    loadChildren: () => import('./modules/without-o/without-o.module').then(module => module.WithoutOModule),
  },
  {
    path: 'with-o',
    loadChildren: () => import('./modules/with-o/with-o.module').then(module => module.WithOModule),
  },
  {
    path: '**',
    component: HomeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
