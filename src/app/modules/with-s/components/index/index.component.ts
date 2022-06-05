import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-with-s-index',
  templateUrl: './index.component.html',
})
export class IndexComponent implements OnInit {
  name: string = '';

  sortedArray: string[] = [];
  constructor() {}

  ngOnInit(): void {}
}
