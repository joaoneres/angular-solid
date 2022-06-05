import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './components/index/index.component';
import { ResultComponent } from './components/partials/result/result.component';
import { WithSRoutingModule } from './with-s-routing.module';
import { NavbarComponent } from './components/partials/navbar/navbar.component';
import { ProcessComponent } from './components/partials/process/process.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SortService } from './services/sort.service';

@NgModule({
  declarations: [
    IndexComponent,
    ResultComponent,
    NavbarComponent,
    ProcessComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    WithSRoutingModule,
  ],
  providers: [
    SortService,
  ],
})
export class WithSModule { }
