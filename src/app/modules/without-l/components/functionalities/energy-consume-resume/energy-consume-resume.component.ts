import { EnergyConsume } from '../../../data/energy-consume.interface';
import { Component, OnInit } from '@angular/core';
import { EnergyConsumeService } from '../../../services/energy-consume.service';

@Component({
  selector: 'app-without-l-functionalities-energy-consume-resume',
  templateUrl: './energy-consume-resume.component.html',
})
export class EnergyConsumeResumeComponent implements OnInit {
  energyConsumeResume: EnergyConsume[] = [];

  constructor(private readonly energyConsumeService: EnergyConsumeService) {}

  ngOnInit(): void {
    this.energyConsumeService.getEnergyConsumeResume().then(value => this.energyConsumeResume = value);
  }

  canShowEnergyConsumeResume(): boolean {
    return this.energyConsumeResume.length > 0;
  }
}
