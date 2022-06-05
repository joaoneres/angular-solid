import { EnergyConsume } from '../data/energy-consume.interface';
import { Injectable } from '@angular/core';
import { ENERGY_RESUME } from '../data/energy-consume.data';

@Injectable()
export class EnergyConsumeService {
  energyResume: EnergyConsume[] = ENERGY_RESUME;

  constructor() { }

  async getEnergyConsumeResume(): Promise<EnergyConsume[]> {
    return new Promise<EnergyConsume[]>((resolve) => {
      setTimeout(() => {
        resolve(this.energyResume);
      }, 3000);
    });
  }
}
