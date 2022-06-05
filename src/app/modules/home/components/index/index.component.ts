import { Component, Inject, OnInit } from '@angular/core';
import { CepConsultServiceInterface } from 'src/app/shared/services/cep-consult/cep-consult-service.interface';
import { CEP_CONSULT_SERVICE } from 'src/app/shared/services/cep-consult/cep-consult-service.token';

@Component({
  selector: 'app-home-index',
  templateUrl: './index.component.html',
})
export class IndexComponent implements OnInit {
  constructor(@Inject(CEP_CONSULT_SERVICE) private readonly cepConsultService: CepConsultServiceInterface) { }

  ngOnInit(): void {
    this.cepConsultService.find('65910020').subscribe((success) => console.log(success));
  }
}
