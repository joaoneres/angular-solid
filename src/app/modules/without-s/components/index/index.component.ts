import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-index',
  template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">MyApp Example!</a>
      </div>
    </nav>

    <div class="container-fluid">
      <div class="row mt-4 mb-4">
        <div class="col-md-12">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Ordenando array's</h5>
              <p class="card-text">Informe valores separados por vírgula para ordenação.</p>

              <textarea class="form-control mb-3" rows="10" [formControl]="textareaControl"></textarea>

              <p class="text-danger">
                <small *ngIf="textareaControl.dirty && textareaControl.touched && textareaControl.invalid">
                  Dados informados estão errados!
                </small>
              </p>

              <button [disabled]="textareaControl.invalid" class="btn btn-primary" (click)="sort()">
                Ordenar
              </button>
            </div>
          </div>
        </div>

        <div class="col-md-12 mt-3" *ngIf="canShowResult()">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Resultado</h5>
              <p class="card-text">Abaixo os valores ordenados (ordem decrescente): </p>

              <div class="alert alert-info">
                <span *ngFor="let number of finalArray; let i = index; let l = last;">
                  {{ number }}<span *ngIf="!l">, </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class IndexComponent implements OnInit {
  finalArray: string[] = [];
  textareaControl: FormControl = new FormControl('', [Validators.required, Validators.minLength(1)]);

  constructor() {}

  ngOnInit(): void {}

  canShowResult(): boolean {
    return this.finalArray.length > 0;
  }

  sort(): void {
    let numbers: string[] = this.textareaControl.value.split(',');

    this.finalArray = numbers.map((value) => {
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
