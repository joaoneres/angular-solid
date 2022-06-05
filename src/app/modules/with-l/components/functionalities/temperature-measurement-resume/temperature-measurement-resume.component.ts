import { MainDirective } from './../main/main.directives';
import { TemperatureMeasurementService } from '../../../services/temperature-measurement.service';
import { Component, OnInit } from '@angular/core';
import { TemperatureMeasurement } from '../../../data/temperature-measurement.interface';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-with-l-functionalities-temperature-measurement-resume',
  templateUrl: './temperature-measurement-resume.component.html',
})
export class TemperatureMeasurementResumeComponent extends MainDirective implements OnInit {
  temperatureMeasurementResume: TemperatureMeasurement[] = [];

  constructor(private readonly temperatureMeasurementService: TemperatureMeasurementService, protected readonly datePipe: DatePipe) {
    super(datePipe);
  }

  ngOnInit(): void {
    this.temperatureMeasurementService.getTemperatureMeasurementResume().then(value => this.temperatureMeasurementResume = value);
  }

  canShowTemperatureMeasurementResume(): boolean {
    return this.temperatureMeasurementResume.length > 0;
  }

  getNextRecordDate(period: number): string {
    return 'Indefinido.';
  }
}
