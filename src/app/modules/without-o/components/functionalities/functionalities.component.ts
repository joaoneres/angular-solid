import { Component, OnInit } from '@angular/core';

interface TemperatureMeasurement {
  date: string;
  temperature: number;
  sector: string;
}

const temperatureResume: TemperatureMeasurement[] = [
  {
    date: '2022-05-11',
    temperature: 35,
    sector: 'A',
  },
  {
    date: '2022-05-18',
    temperature: 42,
    sector: 'D',
  },
  {
    date: '2022-05-29',
    temperature: 27,
    sector: 'E',
  },
];

interface EnergyConsume {
  startDate: string;
  finalDate: string;
  accrued: number;
}

const energyResume: EnergyConsume[] = [
  {
    startDate: '2022-05-11',
    finalDate: '2022-06-11',
    accrued: 350,
  },
  {
    startDate: '2022-04-11',
    finalDate: '2022-05-11',
    accrued: 219,
  },
  {
    startDate: '2022-03-11',
    finalDate: '2022-04-11',
    accrued: 199,
  },
];

@Component({
  selector: 'app-without-o-functionalities',
  templateUrl: './functionalities.component.html',
})
export class FunctionalitiesComponent implements OnInit {
  temperatureMeasurementResume: TemperatureMeasurement[] = [];
  energyConsumeResume: EnergyConsume[] = [];

  constructor() {}

  ngOnInit(): void {
    Promise.all([
      this.getTemperatureMeasurementResume().then(value => this.temperatureMeasurementResume = value),
      this.getEnergyConsumeResume().then(value => this.energyConsumeResume = value),
    ]);
  }

  async getTemperatureMeasurementResume(): Promise<TemperatureMeasurement[]> {
    return new Promise<TemperatureMeasurement[]>((resolve) => {
      setTimeout(() => {
        resolve(temperatureResume);
      }, 5000);
    });
  }

  async getEnergyConsumeResume(): Promise<EnergyConsume[]> {
    return new Promise<EnergyConsume[]>((resolve) => {
      setTimeout(() => {
        resolve(energyResume);
      }, 3000);
    });
  }

  canShowEnergyConsumeResume(): boolean {
    return this.energyConsumeResume.length > 0;
  }

  canShowTemperatureMeasurementResume(): boolean {
    return this.temperatureMeasurementResume.length > 0;
  }
}
