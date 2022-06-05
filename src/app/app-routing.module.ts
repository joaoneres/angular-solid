import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'without-s',
    loadChildren: () => import('./modules/without-s/without-s.module').then(module => module.WithoutSModule),
  },
  {
    path: 'with-s',
    loadChildren: () => import('./modules/with-s/with-s.module').then(module => module.WithSModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
