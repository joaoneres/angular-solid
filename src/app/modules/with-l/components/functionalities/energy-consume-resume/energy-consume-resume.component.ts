import { EnergyConsume } from '../../../data/energy-consume.interface';
import { Component, OnInit } from '@angular/core';
import { EnergyConsumeService } from '../../../services/energy-consume.service';
import { DatePipe } from '@angular/common';
import { MainDirective } from '../main/main.directives';

@Component({
  selector: 'app-with-l-functionalities-energy-consume-resume',
  templateUrl: './energy-consume-resume.component.html',
})
export class EnergyConsumeResumeComponent extends MainDirective implements OnInit {
  energyConsumeResume: EnergyConsume[] = [];

  constructor(private readonly energyConsumeService: EnergyConsumeService, protected readonly datePipe: DatePipe) {
    super(datePipe);
  }

  ngOnInit(): void {
    this.energyConsumeService.getEnergyConsumeResume().then(value => this.energyConsumeResume = value);
  }

  canShowEnergyConsumeResume(): boolean {
    return this.energyConsumeResume.length > 0;
  }
}
