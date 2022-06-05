import { TemperatureMeasurementService } from './../../../services/temperature-measurement.service';
import { Component, OnInit } from '@angular/core';
import { TemperatureMeasurement } from '../../../data/temperature-measurement.interface';

@Component({
  selector: 'app-with-o-functionalities-temperature-measurement-resume',
  templateUrl: './temperature-measurement-resume.component.html',
})
export class TemperatureMeasurementResumeComponent implements OnInit {
  temperatureMeasurementResume: TemperatureMeasurement[] = [];

  constructor(private readonly temperatureMeasurementService: TemperatureMeasurementService) { }

  ngOnInit(): void {
    this.temperatureMeasurementService.getTemperatureMeasurementResume().then(value => this.temperatureMeasurementResume = value);
  }

  canShowTemperatureMeasurementResume(): boolean {
    return this.temperatureMeasurementResume.length > 0;
  }
}
