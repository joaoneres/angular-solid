import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'with-l',
    loadChildren: () => import('./modules/with-l/with-l.module').then(module => module.WithLModule),
  },
  {
    path: 'without-l',
    loadChildren: () => import('./modules/without-l/without-l.module').then(module => module.WithoutLModule),
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
