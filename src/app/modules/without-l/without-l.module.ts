import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/functionalities/main/main.component';
import { IndexComponent } from './components/index/index.component';
import { TemperatureMeasurementResumeComponent } from './components/functionalities/temperature-measurement-resume/temperature-measurement-resume.component';
import { EnergyConsumeResumeComponent } from './components/functionalities/energy-consume-resume/energy-consume-resume.component';
import { EnergyConsumeService } from './services/energy-consume.service';
import { TemperatureMeasurementService } from './services/temperature-measurement.service';
import { WithoutLRoutingModule } from './without-l-routing.module';

@NgModule({
  declarations: [
    MainComponent,
    IndexComponent,
    TemperatureMeasurementResumeComponent,
    EnergyConsumeResumeComponent
  ],
  imports: [
    CommonModule,
    WithoutLRoutingModule,
  ],
  providers: [
    EnergyConsumeService,
    TemperatureMeasurementService,
  ]
})
export class WithoutLModule { }
