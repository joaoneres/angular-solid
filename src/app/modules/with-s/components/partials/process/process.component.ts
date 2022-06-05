import { FormControl, Validators } from '@angular/forms';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SortService } from '../../../services/sort.service';

@Component({
  selector: 'app-with-s-partials-process',
  templateUrl: './process.component.html',
})
export class ProcessComponent implements OnInit {
  @Output() sortedArray: EventEmitter<string[]> = new EventEmitter<string[]>();
  textareaControl: FormControl = new FormControl('', [Validators.required, Validators.minLength(1)]);

  constructor(private readonly sortService: SortService) { }

  ngOnInit(): void {
  }

  sort() {
    let result = this.sortService.sort(this.textareaControl.value);
    this.sortedArray.emit(result);
  }
}
