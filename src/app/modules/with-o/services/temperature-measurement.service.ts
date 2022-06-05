import { Injectable } from '@angular/core';
import { TEMPERATURE_RESUME } from '../data/temperature-measurement.data';
import { TemperatureMeasurement } from '../data/temperature-measurement.interface';

@Injectable()
export class TemperatureMeasurementService {
  temperatureMeasurementResume: TemperatureMeasurement[] = TEMPERATURE_RESUME;

  constructor() { }

  async getTemperatureMeasurementResume(): Promise<TemperatureMeasurement[]> {
    return new Promise<TemperatureMeasurement[]>((resolve) => {
      setTimeout(() => {
        resolve(this.temperatureMeasurementResume);
      }, 5000);
    });
  }
}
