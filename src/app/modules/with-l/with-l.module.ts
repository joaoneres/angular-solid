import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MainComponent } from './components/functionalities/main/main.component';
import { IndexComponent } from './components/index/index.component';
import { TemperatureMeasurementResumeComponent } from './components/functionalities/temperature-measurement-resume/temperature-measurement-resume.component';
import { EnergyConsumeResumeComponent } from './components/functionalities/energy-consume-resume/energy-consume-resume.component';
import { EnergyConsumeService } from './services/energy-consume.service';
import { TemperatureMeasurementService } from './services/temperature-measurement.service';
import { WithLRoutingModule } from './with-l-routing.module';

@NgModule({
  declarations: [
    MainComponent,
    IndexComponent,
    TemperatureMeasurementResumeComponent,
    EnergyConsumeResumeComponent
  ],
  imports: [
    CommonModule,
    WithLRoutingModule,
  ],
  providers: [
    EnergyConsumeService,
    TemperatureMeasurementService,
    DatePipe,
  ]
})
export class WithLModule { }
