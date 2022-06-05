import { Injectable } from '@angular/core';

@Injectable()
export class SortService {
  constructor() {}

  sort(value: string): string[] {
    let numbers: string[] = value.split(',');

    return numbers.map((value) => {
      return value.replace(/\D/g, '');
    })
    .sort((a, b) => {
      return Number(b) - Number(a);
    })
    .filter((value) => {
      return value !== '';
    });
  }
}
