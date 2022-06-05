import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-with-s-partials-result',
  templateUrl: './result.component.html',
})
export class ResultComponent implements OnInit {
  @Input() result: string[] = [];

  constructor() { }

  ngOnInit(): void {}

  canDisplayResult(): boolean {
    return this.result.length > 0;
  }
}
