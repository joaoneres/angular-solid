import { DatePipe } from "@angular/common";
import { Directive, Input } from "@angular/core";

@Directive()
export class MainDirective {
  @Input() title: string = 'Funcionalidade';

  constructor(protected readonly datePipe: DatePipe) {}

  getNextRecordDate(period: number): string {
    let nowDate = new Date();
    return this.datePipe.transform(nowDate.setDate(nowDate.getDate() + period), 'dd-MM-yyyy') ?? 'Não identificado';
  }
}
